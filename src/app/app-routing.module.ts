import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { weaponComponent } from './weapon/weapon.component';
import { AddProductComponent } from './add-weapon/add-weapon.component';
import { UpdateProductComponent } from './update-weapon/update-weapon.component';
import { RechercheParClassComponent } from './recherche-par-class/recherche-par-class.component';
import { RechercheParNameComponent } from './recherche-par-name/recherche-par-name.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { WeaponGuard } from './weapon.guard';
import { ListClassComponent } from './list-class/list-class.component';
import { UsersComponent } from './users/users.component';
import { AddRoleToUserComponent } from './add-role-to-user/add-role-to-user.component';
import { SginUpComponent } from './sign-up/sgin-up.component';
const routes: Routes = [
  {path: "weapons", component : weaponComponent},
  {path: "add-weapon", component : AddProductComponent ,canActivate:[WeaponGuard] },
  { path: "", redirectTo: "weapons", pathMatch: "full" },
  {path: "updateWeapon/:id", component: UpdateProductComponent},
  {path: "rechercheParClass", component : RechercheParClassComponent},
  {path: "rechercheParName", component : RechercheParNameComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "listClass", component : ListClassComponent},
  {path: "users", component : UsersComponent,canActivate: [WeaponGuard]},
  {path: "add-role-to-user/:id", component : AddRoleToUserComponent,canActivate: [WeaponGuard]},
  {path: "signup", component : SginUpComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
