import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabReceiptsPageRoutingModule } from './tab-receipts-routing.module';
import { TabReceiptsPage } from './tab-receipts.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabReceiptsPageRoutingModule
  ],
  declarations: [TabReceiptsPage]
})
export class TabReceiptsPageModule { }
