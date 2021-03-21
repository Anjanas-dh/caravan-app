import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReceiptService } from 'src/app/services/receipt/receipt.service';
import { NewReceiptItemModalModule } from './new-receipt-item-modal/new-receipt-item-modal.module';
import { TabReceiptsPageRoutingModule } from './tab-receipts-routing.module';
import { TabReceiptsPage } from './tab-receipts.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabReceiptsPageRoutingModule,
    NewReceiptItemModalModule,
  ],
  declarations: [TabReceiptsPage],
  providers: [ReceiptService]
})
export class TabReceiptsPageModule { }
