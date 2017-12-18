import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register.component';

const routes: Routes = [
  {
      path: '',
      component: RegisterComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class RegisterRoutingModule { }
