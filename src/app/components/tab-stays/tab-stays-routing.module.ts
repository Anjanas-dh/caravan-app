import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabStaysPage } from './tab-stays.page';

const routes: Routes = [
  {
    path: '',
    component: TabStaysPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabStaysPageRoutingModule { }
