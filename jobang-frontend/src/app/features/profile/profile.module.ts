import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ViewProfileComponent } from './pages/view-profile/view-profile.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { DeleteAccountComponent } from './pages/delete-account/delete-account.component';


@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent,
    DeleteAccountComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
