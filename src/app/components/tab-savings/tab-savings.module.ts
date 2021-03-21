import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabSavingsPageRoutingModule } from './tab-savings-routing.module';
import { TabSavingsPage } from './tab-savings.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TabSavingsPage }]),
    TabSavingsPageRoutingModule,
  ],
  declarations: [TabSavingsPage]
})
export class TabSavingsPageModule { }
