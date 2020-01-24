import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeventPageRoutingModule } from './pevent-routing.module';

import { PeventPage } from './pevent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeventPageRoutingModule
  ],
  declarations: [PeventPage]
})
export class PeventPageModule {}
