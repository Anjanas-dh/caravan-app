import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { MyToastController } from '../toast/toast';
import { NewInventoryItemModalModule } from './new-inventory-item-modal/new-inventory-item-modal.module';
import { TabInventoryPageRoutingModule } from './tab-inventory-routing.module';
import { TabInventoryPage } from './tab-inventory.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabInventoryPageRoutingModule,
    NewInventoryItemModalModule,
  ],
  declarations: [TabInventoryPage],
  providers: [InventoryService, MyToastController]
})
export class TabInventoryPageModule { }
