import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {EditComponent} from './edit/edit.component';
// import {Role1Component} from './role/role-1.component';

import { Routes, RouterModule } from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {EditComponent} from './edit/edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', component: EditComponent }
];

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditProductModule { }
