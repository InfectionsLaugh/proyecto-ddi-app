import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoorsPageRoutingModule } from './doors-routing.module';

import { DoorsPage } from './doors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoorsPageRoutingModule
  ],
  declarations: [DoorsPage]
})
export class DoorsPageModule {}
