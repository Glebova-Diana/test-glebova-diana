import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {NewProductComponent} from './new-product/new-product.component';
import {EditComponent} from './edit/edit.component';
import {ProductComponent} from './product/product.component';


const routes: Routes = [
  {
    // path: '', redirectTo: '/product', pathMatch: 'full'
    path: '', component: ProductComponent
  },
  {
    path: 'list', component: ListComponent
  },
  {
    path: 'new-product', component: NewProductComponent
  },
  {
    path: 'edit', component: EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
