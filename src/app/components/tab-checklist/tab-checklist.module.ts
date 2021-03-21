import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChecklistService } from 'src/app/services/checklist.service';
import { NewChecklistItemModalModule } from './new-checklist-item-modal/new-checklist-item-modal.module';
import { TabChecklistPageRoutingModule } from './tab-checklist-routing.module';
import { TabChecklistPage } from './tab-checklist.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabChecklistPageRoutingModule,
    NewChecklistItemModalModule,
  ],
  declarations: [TabChecklistPage],
  providers: [ChecklistService]
})
export class TabChecklistPageModule { }
