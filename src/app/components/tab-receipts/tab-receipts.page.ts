import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IReceiptItemDto } from 'src/app/classes/receipt.class';
import { ReceiptService } from 'src/app/services/receipt/receipt.service';
import { ActionEnum } from 'src/app/utils/enum.util';
import { StringUtil } from 'src/app/utils/string.util';
import { MyToastController } from '../toast/toast';
import { ReceiptItemModal } from './receipt-item-modal/receipt-item-modal';

@Component({
  selector: 'app-tab-receipts',
  templateUrl: 'tab-receipts.page.html',
  styleUrls: ['tab-receipts.page.scss']
})
export class TabReceiptsPage implements OnInit {
  receiptItems: IReceiptItemDto[] = [];
  StringUtil = StringUtil;

  constructor(private receiptService: ReceiptService,
    private modalController: ModalController,
    private toastController: MyToastController,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.receiptService.getReceiptItems().toPromise().then((receipts: IReceiptItemDto[]) => {
      this.receiptItems = receipts;
    });
  }

  updateReceipt(item: IReceiptItemDto) {
    return this.openModal(item);
  }

  createReceipt() {
    return this.openModal();
  }

  deleteReceipt(item: IReceiptItemDto) {
    // START temp delete
    const index = this.receiptItems.findIndex(x => x.id == item.id);
    this.receiptItems.splice(index, 1);
    // END temp delete
    return this.receiptService.deleteReceiptItem(item).toPromise().then((receipt: IReceiptItemDto) => {
      this.toastController.openToast(`Receipt item "${this.datePipe.transform(receipt.date, 'dd-MM-yyyy')}" is deleted`)
    })
  }

  async openModal(updateData?: IReceiptItemDto) {
    const modal = await this.modalController.create({
      component: ReceiptItemModal,
      cssClass: 'receipt-modal',
      componentProps: {
        'updateData': updateData ? updateData : null,
        'action': updateData ? ActionEnum.Update : ActionEnum.Create,
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data && data.item) {
      if (data.action == ActionEnum.Create) {
        this.receiptItems.push(data.item as IReceiptItemDto);
      } else if (data.action == ActionEnum.Update) {
        // TEMP update existing item
        const index = this.receiptItems.findIndex(x => x.id == data.item.id);
        this.receiptItems[index] = data.item;
      }
      this.toastController.openToast(`Receipt on "${this.datePipe.transform((data.item as IReceiptItemDto).date, 'dd-MM-yyyy')}" is ${data.action == ActionEnum.Create ? 'created' : 'updated'}`)
    }
  }
}
