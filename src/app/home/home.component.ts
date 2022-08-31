import { Component, OnInit, Input, Output } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { SignupModalComponent } from '../signup-modal/signup-modal.component';
import { environment } from 'src/environments/environment';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { AuthGuard } from '../auth/auth.guard';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';
import { NgModule } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {
  @Output() searchcriteria = new EventEmitter<String>();
  cognitoUser;
  searchword: String | undefined;

  constructor(private dialogRef : MatDialog) {
    let poolData = {
      UserPoolId: environment.cognitoUserPoolId,
      ClientId: environment.cognitoAppClientId
    };

    var userPool = new CognitoUserPool(poolData);
    this.cognitoUser = userPool.getCurrentUser();
   }

  openLogInDialog(){
    this.dialogRef.open(LoginModalComponent);
  }

  openSignUpDialog(){
    this.dialogRef.open(SignupModalComponent);
  }


  searchThis() {
      this.searchcriteria.emit(this.searchword)
  }

  

}




