import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewBlogComponent } from './pages/view-blog.component';

const routes: Routes = [{
    path: '', component: ViewBlogComponent, children: [
        { path: '', component: ViewBlogComponent },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewBlogRoutingModule { }
