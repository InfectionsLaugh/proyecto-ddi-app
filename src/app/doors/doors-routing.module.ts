import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoorsPage } from './doors.page';

const routes: Routes = [
  {
    path: '',
    component: DoorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoorsPageRoutingModule {}
