import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChecklistService } from 'src/app/services/checklist/checklist.service';
import { NewInventoryItemModal } from './new-inventory-item-modal';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [NewInventoryItemModal],
    providers: [ChecklistService]
})
export class NewInventoryItemModalModule { }
