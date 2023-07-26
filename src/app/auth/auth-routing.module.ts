import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: 'welcome'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(a => a.WelcomeModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./words/words.module').then(a => a.WordsModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./words/words.module').then(a => a.WordsModule)
  },
  {
    path: 'check',
    loadChildren: () => import('./words/words.module').then(a => a.WordsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
