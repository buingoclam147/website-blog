import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CensorshipComponent } from './pages/censorship.component';

const routes: Routes = [{
  path: '', component: CensorshipComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CensorshipRoutingModule { }