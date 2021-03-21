import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonInput, ModalController } from '@ionic/angular';
import { IInventoryItemDto, InventoryItemDto } from 'src/app/classes/inventory.class';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { FormUtil } from 'src/app/utils/form.util';
import { StringUtil } from 'src/app/utils/string.util';

@Component({
    selector: 'new-inventory-item-modal',
    templateUrl: 'new-inventory-item-modal.html',
    styleUrls: ['./new-inventory-item-modal.scss'],
    encapsulation: ViewEncapsulation.None

})
export class NewInventoryItemModal {
    @ViewChild('nameInput', { static: false }) ionInput: IonInput;
    form: FormGroup = new FormGroup({});

    constructor(private inventoryService: InventoryService,
        private modalController: ModalController) {
        this.form = new FormGroup({
            id: new FormControl(null, Validators.required),
            name: new FormControl(null, Validators.required),
            color: new FormControl('primary', Validators.required),
            inCaravan: new FormControl(false),
            atAnja: new FormControl(false),
            atLoes: new FormControl(false),
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
        const dto = new InventoryItemDto({
            id: this.form.controls.id.value,
            name: this.form.controls.name.value,
            color: this.form.controls.color.value,
            inCaravan: this.form.controls.inCaravan.value,
            atAnja: this.form.controls.atAnja.value,
            atLoes: this.form.controls.atLoes.value,
        });
        this.inventoryService.createInventoryItem(dto).toPromise().then((createdItem: IInventoryItemDto) => {
            this.dismiss(dto); // this.dismiss(createdItem);
        })
    }
    dismiss(item?: IInventoryItemDto) {
        this.modalController.dismiss({
            'dismissed': true,
            'item': item ? item : null
        });
    }
}