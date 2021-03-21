import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IReceiptItemDto, IReceiptTypeDto, ReceiptItemDto } from 'src/app/classes/receipt.class';
import { ReceiptService } from 'src/app/services/receipt/receipt.service';
import { DateUtil } from 'src/app/utils/date.util';
import { FormUtil } from 'src/app/utils/form.util';
import { NumberUtil } from 'src/app/utils/number.util';

@Component({
    selector: 'new-receipt-item-modal',
    templateUrl: 'new-receipt-item-modal.html',
})

export class NewReceiptItemModal implements OnInit {
    form: FormGroup = new FormGroup({});
    receiptTypes: IReceiptTypeDto[] = [];

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
        })
    }

    ngOnInit() {
        this.receiptService.getReceiptTypeItems().toPromise().then((types: IReceiptTypeDto[]) => {
            this.receiptTypes = types;
        });
    }

    add() {
        FormUtil.ValidateAll(this.form);
        if (this.form.invalid) {
            console.error("form is invalid");
            return;
        }
        const dto = new ReceiptItemDto({
            id: (new Date(this.form.controls.date.value).getTime() + NumberUtil.RandomNumber(false)).toString(),
            date: DateUtil.ISOToDate(this.form.controls.date.value),
            description: this.form.controls.description.value,
            receiptType: this.form.controls.receiptType.value,
            costs: this.form.controls.costs.value,
            receiptUrl: this.form.controls.receiptUrl.value,
        });
        this.receiptService.createReceiptItem(dto).toPromise().then((createdItem: IReceiptItemDto) => {
            this.dismiss(dto); // this.dismiss(createdItem);
        })
    }
    dismiss(item?: IReceiptItemDto) {
        this.modalController.dismiss({
            'dismissed': true,
            'item': item ? item : null
        });
    }
}