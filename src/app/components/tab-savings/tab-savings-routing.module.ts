import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabSavingsPage } from './tab-savings.page';

const routes: Routes = [
  {
    path: '',
    component: TabSavingsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabSavingsPageRoutingModule { }
