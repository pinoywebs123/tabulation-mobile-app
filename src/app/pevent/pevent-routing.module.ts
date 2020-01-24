import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeventPage } from './pevent.page';

const routes: Routes = [
  {
    path: '',
    component: PeventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeventPageRoutingModule {}
