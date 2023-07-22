import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/wallet/wallet.module').then(m => m.WalletModule),
  },
  // {
  //   path: '**',
  //   loadChildren: () => import('./pages/wallet/wallet.module').then(m => m.WalletModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
