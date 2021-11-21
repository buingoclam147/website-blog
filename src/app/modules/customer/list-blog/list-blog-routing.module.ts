import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBlogComponent } from './pages/list-blog.component';

const routes: Routes = [{
  path: '', component: ListBlogComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListBlogRoutingModule { }