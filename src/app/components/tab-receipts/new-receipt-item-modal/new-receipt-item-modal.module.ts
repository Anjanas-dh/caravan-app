import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChecklistService } from 'src/app/services/checklist/checklist.service';
import { NewReceiptItemModal } from './new-receipt-item-modal';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [NewReceiptItemModal],
    providers: [ChecklistService]
})
export class NewReceiptItemModalModule { }
