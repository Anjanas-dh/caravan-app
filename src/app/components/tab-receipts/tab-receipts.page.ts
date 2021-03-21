import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IReceiptItemDto } from 'src/app/classes/receipt.class';
import { ReceiptService } from 'src/app/services/receipt/receipt.service';
import { StringUtil } from 'src/app/utils/string.util';
import { NewReceiptItemModal } from './new-receipt-item-modal/new-receipt-item-modal';

@Component({
  selector: 'app-tab-receipts',
  templateUrl: 'tab-receipts.page.html',
  styleUrls: ['tab-receipts.page.scss']
})
export class TabReceiptsPage implements OnInit {
  receiptItems: IReceiptItemDto[] = [];

  constructor(private receiptService: ReceiptService,
    private modalController: ModalController) { }

  ngOnInit() {
    this.receiptService.getReceiptItems().toPromise().then((receipts: IReceiptItemDto[]) => {
      this.receiptItems = receipts;
    });
  }

  toggleReceiptImage(receipt: IReceiptItemDto) {
    if (StringUtil.NotNullOrEmpty(receipt.receiptUrl)) {
      receipt.showImage = !receipt.showImage;
    } else {
      receipt.showImage = false;
    }
  }

  async addNewItem() {
    const modal = await this.modalController.create({
      component: NewReceiptItemModal,
      cssClass: 'new-inventory-item'
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data && data.item) {
      this.receiptItems.push(data.item as IReceiptItemDto);
    }
  }
}
