import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Favorites } from './favorites/favorites.component';
import { AboutComponent } from './about/about.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { SignupModalComponent } from './signup-modal/signup-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FavoriteButtonComponent } from './favorite-button/favorite-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Favorites,
    AboutComponent,
    LoginModalComponent,
    SignupModalComponent,
    ForgotPasswordComponent,
    FavoriteButtonComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    MaterialModule,
  ],
  exports: [FavoriteButtonComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
