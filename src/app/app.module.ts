import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material/material.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { ApiService } from './service/ApiService';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserRegistrationComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
