import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { SignupModalComponent } from './signup-modal/signup-modal.component';
import { CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '959035_ConArtist';
  cognitoUser: CognitoUser | null;

  constructor(private dialogRef: MatDialog) {
    // checks if a user is signed in or not
    let poolData = {
      UserPoolId: environment.cognitoUserPoolId,
      ClientId: environment.cognitoAppClientId
    };

    var userPool = new CognitoUserPool(poolData);
    this.cognitoUser = userPool.getCurrentUser();
  }

  // Opens Signup
  openSignupModal() {
    this.dialogRef.open(SignupModalComponent);
  }

// Opens Login
  openLoginModal() {
    this.dialogRef.open(LoginModalComponent)
  }

   // logs the current user out and reloads page
  onLogout(): void {
    let poolData = {
      UserPoolId: environment.cognitoUserPoolId,
      ClientId: environment.cognitoAppClientId
    };
    let userPool = new CognitoUserPool(poolData);
    let cognitoUser = userPool.getCurrentUser();
    cognitoUser?.signOut();
    window.location.reload();
  }

  
}
