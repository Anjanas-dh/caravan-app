import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IReceiptItemDto, IReceiptTypeDto, ReceiptItemDto } from 'src/app/classes/receipt.class';
import { ReceiptService } from 'src/app/services/receipt/receipt.service';
import { DateUtil } from 'src/app/utils/date.util';
import { ActionEnum } from 'src/app/utils/enum.util';
import { FormUtil } from 'src/app/utils/form.util';
import { Guid } from 'src/app/utils/guid.util';

@Component({
    selector: 'receipt-item-modal',
    templateUrl: 'receipt-item-modal.html',
})

export class ReceiptItemModal implements OnInit {
    @Input('updateData') updateData: IReceiptItemDto;
    @Input('action') action: ActionEnum;
    form: FormGroup = new FormGroup({});
    receiptTypes: IReceiptTypeDto[] = [];

    get modalText(): string {
        return this.action == ActionEnum.Create ? 'Create receipt' : 'Update receipt';
    }

    constructor(private receiptService: ReceiptService,
        private modalController: ModalController) {
        const date = DateUtil.ToISOString(new Date());
        this.form = new FormGroup({
            id: new FormControl(null),
            date: new FormControl(date, Validators.required),
            description: new FormControl(null, Validators.required),
            receiptType: new FormControl(null, Validators.required),
            costs: new FormControl(null, Validators.required),
            receiptUrl: new FormControl(null),
        });
        this.form.markAsPristine();
        this.form.markAsUntouched();
    }

    ngOnInit() {
        this.receiptService.getReceiptTypeItems().toPromise().then((types: IReceiptTypeDto[]) => {
            this.receiptTypes = types;
        });
        if (this.updateData) {
            this.form.setValue({
                id: this.updateData.id,
                date: DateUtil.ToISOString(this.updateData.date),
                description: this.updateData.description,
                receiptType: this.updateData.receiptType,
                costs: this.updateData.costs,
                receiptUrl: this.updateData.receiptUrl,
            });
            this.form.markAsPristine();
            this.form.markAsUntouched();
        }
    }

    add() {
        FormUtil.ValidateAll(this.form);
        if (this.form.invalid) {
            console.error("form is invalid");
            return;
        }
        const dto = new ReceiptItemDto({
            id: this.updateData ? this.form.controls.id.value : Guid.Generate(),
            date: DateUtil.ISOToDate(this.form.controls.date.value),
            description: this.form.controls.description.value,
            receiptType: this.form.controls.receiptType.value,
            costs: this.form.controls.costs.value,
            receiptUrl: this.form.controls.receiptUrl.value,
        });
        if (this.updateData) {
            this.receiptService.updateReceiptItem(dto).toPromise().then((updatedItem: IReceiptItemDto) => {
                this.dismiss(ActionEnum.Update, dto); // this.dismiss(updatedItem);
            })
        } else {

            this.receiptService.createReceiptItem(dto).toPromise().then((createdItem: IReceiptItemDto) => {
                this.dismiss(ActionEnum.Create, dto); // this.dismiss(createdItem);
            })
        }
    }
    dismiss(action: ActionEnum, item?: IReceiptItemDto) {
        this.modalController.dismiss({
            'dismissed': true,
            'item': item ? item : null,
            'action': action,
        });
    }
}