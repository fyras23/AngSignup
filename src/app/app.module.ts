import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { weaponComponent } from './weapon/weapon.component';
import { AddProductComponent } from './add-weapon/add-weapon.component';
import { FormsModule } from '@angular/forms';
import { UpdateProductComponent } from './update-weapon/update-weapon.component';
import { ClassListComponent } from './class-list/class-list.component';

import { RechercheParClassComponent } from './recherche-par-class/recherche-par-class.component';
import { RechercheParNameComponent } from './recherche-par-name/recherche-par-name.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListClassComponent } from './list-class/list-class.component';
import { UpdateClassComponent } from './update-class/update-class.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { UsersComponent } from './users/users.component';
import { AddRoleToUserComponent } from './add-role-to-user/add-role-to-user.component';
import { SginUpComponent } from './sign-up/sgin-up.component';

@NgModule({
  declarations: [
    AppComponent,
    weaponComponent,
    AddProductComponent,
    UpdateProductComponent,
    ClassListComponent,
    RechercheParClassComponent,
    RechercheParNameComponent,
    SearchFilterPipe,
    LoginComponent,
    ForbiddenComponent,
    ListClassComponent,
    UpdateClassComponent,
    UsersComponent,
    AddRoleToUserComponent,
    SginUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
