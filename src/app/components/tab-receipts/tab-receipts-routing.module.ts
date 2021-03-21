import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabReceiptsPage } from './tab-receipts.page';

const routes: Routes = [
  {
    path: '',
    component: TabReceiptsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabReceiptsPageRoutingModule { }
