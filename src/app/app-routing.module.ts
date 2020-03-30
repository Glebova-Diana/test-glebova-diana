import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './components/list/list.component';
import {UserGuard} from './guards/user/user.guard';
import {OwnerGuard} from './guards/owner/owner.guard';


const routes: Routes = [
  {
    path: '', redirectTo: '/list', pathMatch: 'full'
  },
  {
    path: 'list', component: ListComponent
  },
  {
    path: 'editProduct', loadChildren: './editProduct/edit-product.module#EditProductModule', canActivate: [OwnerGuard]
  },
  {
    path: 'newProduct', loadChildren: './new-product/new-product.module#NewProductModule', canActivate: [UserGuard]
  },
  {
    path: '**', component: ListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
