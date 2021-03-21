import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IChecklistItemDto } from 'src/app/classes/checklist.class';
import { ChecklistService } from 'src/app/services/checklist/checklist.service';
import { NewChecklistItemModal } from './new-checklist-item-modal/new-checklist-item-modal';

@Component({
  selector: 'app-tab-checklist',
  templateUrl: 'tab-checklist.page.html',
  styleUrls: ['tab-checklist.page.scss'],
})

export class TabChecklistPage implements OnInit {
  checklistItems: IChecklistItemDto[] = [];

  constructor(
    private checklistService: ChecklistService,
    private modalController: ModalController) { }

  ngOnInit() {
    this.checklistService.getChecklistItems().toPromise().then((items: IChecklistItemDto[]) => {
      this.checklistItems = items;
    });
  }

  toggleChanged(item: IChecklistItemDto) {
    this.checklistService.updateChecklistItem(item);
  }

  resetAllitems() {
    this.checklistItems.forEach((x: IChecklistItemDto) => {
      x.done = false;
      return this.checklistService.updateChecklistItem(x);
    });
  }

  async addNewItem() {
    const modal = await this.modalController.create({
      component: NewChecklistItemModal,
      cssClass: 'new-checklist-item'
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data && data.item) {
      this.checklistItems.push(data.item as IChecklistItemDto);
    }
  }
}
