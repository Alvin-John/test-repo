import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'user-update/:userId', component: UserUpdateComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
