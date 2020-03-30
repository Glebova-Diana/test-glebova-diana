import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import {NewProductComponent} from './new-product/new-product.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', component: NewProductComponent }
];

@NgModule({
  declarations: [NewProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NewProductModule { }
