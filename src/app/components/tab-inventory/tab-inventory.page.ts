import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IInventoryItemDto } from 'src/app/classes/inventory.class';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { NewInventoryItemModal } from './new-inventory-item-modal/new-inventory-item-modal';

@Component({
  selector: 'app-tab-inventory',
  templateUrl: 'tab-inventory.page.html',
  styleUrls: ['tab-inventory.page.scss']
})
export class TabInventoryPage implements OnInit {
  inventoryItems: IInventoryItemDto[] = [];

  constructor(private inventoryService: InventoryService,
    private modalController: ModalController) { }

  ngOnInit() {
    this.inventoryService.getInventoryItems().toPromise().then((items: IInventoryItemDto[]) => {
      this.inventoryItems = items;
    });
  }

  toggleChanged(item: IInventoryItemDto) {
    this.inventoryService.updateInventoryItem(item);
  }

  resetAllitems() {
    this.inventoryItems.forEach((x: IInventoryItemDto) => {
      x.inCaravan = true;
      return this.inventoryService.updateInventoryItem(x);
    });
  }

  async addNewItem() {
    const modal = await this.modalController.create({
      component: NewInventoryItemModal,
      cssClass: 'new-inventory-item'
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data && data.item) {
      this.inventoryItems.push(data.item as IInventoryItemDto);
    }
  }

}
