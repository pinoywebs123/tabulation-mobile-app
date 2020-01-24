import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandidateinfoPageRoutingModule } from './candidateinfo-routing.module';

import { CandidateinfoPage } from './candidateinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandidateinfoPageRoutingModule
  ],
  declarations: [CandidateinfoPage]
})
export class CandidateinfoPageModule {}
