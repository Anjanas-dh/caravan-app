import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabInventoryPageRoutingModule } from './tab-inventory-routing.module';
import { TabInventoryPage } from './tab-inventory.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabInventoryPageRoutingModule
  ],
  declarations: [TabInventoryPage]
})
export class TabInventoryPageModule { }
