import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  username: string = '';

  constructor(private dialogRef: Router) { }

  sendCodeToEmail() {
    let poolData = {
      UserPoolId: environment.cognitoUserPoolId,
      ClientId: environment.cognitoAppClientId 
    };
    
    let userPool = new CognitoUserPool(poolData);
    let userData = { Username: this.username, Pool: userPool };
    var cognitoUser = new CognitoUser(userData);
    console.log(cognitoUser);

    cognitoUser.forgotPassword({
      onSuccess: function (result) {
          console.log('call result: ' + result);
      },
      onFailure: function(err) {
          alert(err);
          return;
      }
    });
    
 
  }
}
