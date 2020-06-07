import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvsPage } from './tvs.page';

const routes: Routes = [
  {
    path: '',
    component: TvsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvsPageRoutingModule {}
