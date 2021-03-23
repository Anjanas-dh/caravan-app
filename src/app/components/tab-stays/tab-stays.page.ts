import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IStayGroupedByMonth, IStaysItemDto } from 'src/app/classes/stays.class';
import { StaysService } from 'src/app/services/stays/stays.service';
import { ArrayUtil } from 'src/app/utils/array.util';
import { ActionEnum } from 'src/app/utils/enum.util';
import { MyToastController } from '../toast/toast';
import { StayModal } from './stay-item-modal/stay-modal';

@Component({
  selector: 'app-tab-stays',
  templateUrl: 'tab-stays.page.html',
  styleUrls: ['tab-stays.page.scss']
})
export class TabStaysPage implements OnInit {
  staysItems: IStaysItemDto[] = [];
  stayGroupedByMonth: IStayGroupedByMonth[] = [];

  constructor(private staysService: StaysService,
    private modalController: ModalController,
    private toastController: MyToastController,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.staysService.getStaysItems().toPromise().then((items: IStaysItemDto[]) => {
      this.staysItems = items;
      this.prepareGroupedData(items);
    });
  }

  getStayCosts(stay: IStaysItemDto): { number: number, displayString: string; } {
    let times: number = 0;
    if (stay.anja) { times++ };
    if (stay.loes) { times++ };
    return {
      number: times * 1.25,
      displayString: '€' + (times * 1.25).toFixed(2)
    };
  }

  getMonthCosts(stays: IStaysItemDto[]) {
    let totalCosts: number = 0;
    stays.forEach((stay: IStaysItemDto) => {
      const stayCost = this.getStayCosts(stay).number;
      totalCosts = totalCosts + stayCost;
    });
    return '€' + totalCosts.toFixed(2)
  }

  updateStay(item: IStaysItemDto) {
    return this.openModal(item);
  }

  createStay() {
    return this.openModal();
  }

  deleteStay(item: IStaysItemDto) {
    // START temp delete
    const indexes = this.findIndexesByItem(item);
    if (indexes.stayGroupedIndex < 0 || indexes.stayIndex < 0) { return; }
    this.stayGroupedByMonth[indexes.stayGroupedIndex].stays.splice(indexes.stayIndex, 1);
    if (this.stayGroupedByMonth[indexes.stayGroupedIndex].stays.length == 0) {
      this.stayGroupedByMonth.splice(indexes.stayGroupedIndex, 1);
    }
    // END temp delete
    return this.staysService.deleteStaysItem(item).toPromise().then((stay: IStaysItemDto) => {
      this.toastController.openToast(`Stay on ${this.datePipe.transform(stay.date, 'dd-MM-yyyy')} is deleted`)
    })
  }

  private async openModal(updateData?: IStaysItemDto) {
    const modal = await this.modalController.create({
      component: StayModal,
      cssClass: 'stay-modal',
      componentProps: {
        'updateData': updateData ? updateData : null,
        'action': updateData ? ActionEnum.Update : ActionEnum.Create,
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data && data.item) {
      if (data.action == ActionEnum.Create) {
        this.staysItems.push(data.item as IStaysItemDto);
      } else if (data.action == ActionEnum.Update) {
        // TEMP update existing item
        const indexes = this.findIndexesByItem(data.item);
        this.staysItems[indexes.stayItemsIndex] = data.item;
      }
      this.prepareGroupedData(this.staysItems);
      this.toastController.openToast(`Stay on ${this.datePipe.transform((data.item as IStaysItemDto).date, 'dd-MM-yyyy')} is ${data.action == ActionEnum.Create ? 'created' : 'updated'}`)
    }
  }

  private prepareGroupedData(items: IStaysItemDto[]) {
    this.stayGroupedByMonth = ArrayUtil.GroupBy(items, (item) => item.month).map(x => { return { month: x.key, monthCosts: this.getMonthCosts(x.items), stays: x.items } });
  }

  /** TEMP function */
  private findIndexesByItem(item: IStaysItemDto): { stayGroupedIndex: number, stayIndex: number, stayItemsIndex: number } {
    let stayGroupIndex: number;
    let stayIndex: number;
    this.stayGroupedByMonth.forEach((x: IStayGroupedByMonth, i: number) => {
      x.stays.forEach((y: IStaysItemDto, j: number) => {
        if (y.id == item.id) {
          stayIndex = j;
          stayGroupIndex = i;
        }
      })
    })
    return {
      stayGroupedIndex: stayGroupIndex,
      stayIndex: stayIndex,
      stayItemsIndex: this.staysItems.findIndex(x => x.id == item.id)
    };
  }
}
