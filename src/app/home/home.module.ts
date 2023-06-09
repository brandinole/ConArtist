import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component'; 
import { HomeComponent } from '../home/home.component';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    FavoriteButtonComponent
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
