import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IStaysItemDto, StaysItemDto } from 'src/app/classes/stays.class';
import { StaysService } from 'src/app/services/stays/stays.service';
import { DateUtil } from 'src/app/utils/date.util';
import { ActionEnum } from 'src/app/utils/enum.util';
import { FormUtil } from 'src/app/utils/form.util';
import { Guid } from 'src/app/utils/guid.util';

@Component({
    selector: 'stay-modal',
    templateUrl: 'stay-modal.html',

})
export class StayModal implements OnInit {
    @Input('updateData') updateData: IStaysItemDto;
    @Input('action') action: ActionEnum;
    form: FormGroup = new FormGroup({});
    FormUtil = FormUtil;
    SomeoneThereValidator = SomeoneThereValidator;

    get modalText(): string {
        return this.action == ActionEnum.Create ? 'Create stay' : 'Update stay';
    }

    constructor(private staysService: StaysService,
        private modalController: ModalController) {
        const date = DateUtil.ToISOString(new Date());
        const month = DateUtil.GetMonthEnumByDate(new Date());
        this.form = new FormGroup({
            id: new FormControl(null),
            date: new FormControl(date, Validators.required),
            month: new FormControl(month),
            anja: new FormControl(false, SomeoneThereValidator.createValidator()),
            loes: new FormControl(false, SomeoneThereValidator.createValidator()),
            visitors: new FormControl(false),
            visitorNames: new FormControl(null),
        });
        this.form.markAsPristine();
        this.form.markAsUntouched();
    }

    ngOnInit() {
        if (this.updateData) {
            this.form.setValue({
                id: this.updateData.id,
                date: DateUtil.ToISOString(this.updateData.date),
                month: this.updateData.month,
                anja: this.updateData.anja,
                loes: this.updateData.loes,
                visitors: this.updateData.visitors,
                visitorNames: this.updateData.visitorNames ? this.updateData.visitorNames : null,
            });
            this.form.markAsPristine();
            this.form.markAsUntouched();
        }
    }

    add() {
        this.form.controls.anja.markAsTouched();
        this.form.controls.loes.markAsTouched();
        FormUtil.ValidateAll(this.form);
        if (this.form.invalid) {
            console.error("form is invalid");
            return;
        }
        const date = DateUtil.ISOToDate(this.form.controls.date.value);
        const dto = new StaysItemDto({
            id: this.updateData ? this.form.controls.id.value : Guid.Generate(),
            date: date,
            month: DateUtil.GetMonthEnumByDate(date),
            anja: this.form.controls.anja.value,
            loes: this.form.controls.loes.value,
            visitors: this.form.controls.visitors.value,
            visitorNames: this.form.controls.visitorNames.value,
        });
        if (this.updateData) {
            this.staysService.updateStaysItem(dto).toPromise().then((updatedItem: IStaysItemDto) => {
                this.dismiss(ActionEnum.Update, dto); // this.dismiss(updatedItem);
            });
        } else {
            this.staysService.createStaysItem(dto).toPromise().then((createdItem: IStaysItemDto) => {
                this.dismiss(ActionEnum.Create, dto); // this.dismiss(createdItem);
            });
        }
    }
    dismiss(action: ActionEnum, item?: IStaysItemDto) {
        this.modalController.dismiss({
            'dismissed': true,
            'item': item ? item : null,
            'action': action,
        });
    }
}

export class SomeoneThereValidator {
    static createValidator(): ValidatorFn {
        return (control: AbstractControl) => {
            console.log("control", control);
            if (!control || control == undefined || control.parent == null) {
                return null;
            }
            if (!control.touched) {
                return null;
            }
            if (!control.parent.value.anja && !control.parent.value.loes) {
                return { noonethere: true };
            }
            return null;
        }
    }
    static IsValid(control: AbstractControl) {
        return control && control.errors && control.errors.noonethere ? false : true;
    }
}