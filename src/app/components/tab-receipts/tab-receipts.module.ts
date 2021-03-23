import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReceiptService } from 'src/app/services/receipt/receipt.service';
import { MyToastController } from '../toast/toast';
import { ReceiptItemModalModule } from './receipt-item-modal/receipt-item-modal.module';
import { TabReceiptsPageRoutingModule } from './tab-receipts-routing.module';
import { TabReceiptsPage } from './tab-receipts.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabReceiptsPageRoutingModule,
    ReceiptItemModalModule,
  ],
  declarations: [TabReceiptsPage],
  providers: [ReceiptService, MyToastController, DatePipe]
})
export class TabReceiptsPageModule { }
