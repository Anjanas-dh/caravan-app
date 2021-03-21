import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inventory',
        loadChildren: () => import('../tab-inventory/tab-inventory.module').then(m => m.TabInventoryPageModule)
      },
      {
        path: 'checklist',
        loadChildren: () => import('../tab-checklist/tab-checklist.module').then(m => m.TabChecklistPageModule)
      },
      {
        path: 'receipts',
        loadChildren: () => import('../tab-receipts/tab-receipts.module').then(m => m.TabReceiptsPageModule)
      },
      {
        path: 'savings',
        loadChildren: () => import('../tab-savings/tab-savings.module').then(m => m.TabSavingsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/inventory',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/inventory',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
