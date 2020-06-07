import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvsPageRoutingModule } from './tvs-routing.module';

import { TvsPage } from './tvs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TvsPageRoutingModule
  ],
  declarations: [TvsPage]
})
export class TvsPageModule {}
