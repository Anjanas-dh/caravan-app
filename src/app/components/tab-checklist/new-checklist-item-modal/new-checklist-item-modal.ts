import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonInput, ModalController } from '@ionic/angular';
import { ChecklistItemDto, IChecklistItemDto } from 'src/app/classes/checklist.class';
import { ChecklistService } from 'src/app/services/checklist/checklist.service';
import { FormUtil } from 'src/app/utils/form.util';
import { StringUtil } from 'src/app/utils/string.util';

@Component({
    selector: 'new-checklist-item-modal',
    templateUrl: 'new-checklist-item-modal.html',

})
export class NewChecklistItemModal {
    @ViewChild('nameInput', { static: false }) ionInput: IonInput;
    form: FormGroup = new FormGroup({});

    constructor(private checklistService: ChecklistService,
        private modalController: ModalController) {
        this.form = new FormGroup({
            id: new FormControl(null, Validators.required),
            name: new FormControl(null, Validators.required),
            done: new FormControl(false),
        })
    }

    refocus() {
        this.ionInput.setFocus();
    }

    add() {
        if (StringUtil.NotNullOrEmpty(this.form.controls.name.value)) {
            this.form.controls.id.setValue(StringUtil.ToKebabCase(this.form.controls.name.value));
        }
        FormUtil.ValidateAll(this.form);
        if (this.form.invalid) {
            console.error("form is invalid");
            return;
        }
        const dto = new ChecklistItemDto({
            id: this.form.controls.id.value,
            name: this.form.controls.name.value,
            done: false,
        });
        this.checklistService.createChecklistItem(dto).toPromise().then((createdItem: IChecklistItemDto) => {
            this.dismiss(dto); // this.dismiss(createdItem);
        })
    }
    dismiss(item?: ChecklistItemDto) {
        this.modalController.dismiss({
            'dismissed': true,
            'item': item ? item : null
        });
    }
}