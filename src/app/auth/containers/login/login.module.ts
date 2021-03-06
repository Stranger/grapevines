import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "@shared/shared.module";
import { MaterialModule } from "@material/material.module";

import { LoginPageComponent } from "./login-page/login-page.component";
import { LoginFormComponent } from "../../components/login/login-form/login-form.component";

export const routes: Routes = [
  {
    path: "",
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MaterialModule
  ],
  declarations: [LoginPageComponent, LoginFormComponent]
})
export class LoginModule {}
