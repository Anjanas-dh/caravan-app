import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StaysService } from 'src/app/services/stays/stays.service';
import { MyToastController } from '../toast/toast';
import { StayModalModule } from './stay-item-modal/stay-modal.module';
import { TabStaysPageRoutingModule } from './tab-stays-routing.module';
import { TabStaysPage } from './tab-stays.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabStaysPageRoutingModule,
    StayModalModule,
  ],
  declarations: [TabStaysPage],
  providers: [StaysService, MyToastController, DatePipe]
})
export class TabStaysPageModule { }
