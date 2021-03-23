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
        path: 'stays',
        loadChildren: () => import('../tab-stays/tab-stays.module').then(m => m.TabStaysPageModule)
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
        redirectTo: '/tabs/stays',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/stays',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
