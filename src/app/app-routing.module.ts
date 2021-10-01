import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
      path: '',
      canActivate: [AuthGuard],
      loadChildren: () =>
          import('./pages/home/home.module').then(
              m => m.HomeModule
          ),
  },
  {
      path: '**',
      redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
