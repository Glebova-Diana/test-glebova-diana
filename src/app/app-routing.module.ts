import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './components/list/list.component';
import {NewProductComponent} from './components/new-product/new-product.component';
import {EditComponent} from './components/edit/edit.component';
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
    path: 'new-product', component: NewProductComponent, canActivate: [UserGuard]
  },
  {
    path: 'edit', component: EditComponent, canActivate: [OwnerGuard]
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
