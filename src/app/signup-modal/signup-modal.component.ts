import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CognitoUserPool,CognitoUserAttribute,CognitoUser } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';

interface formDataInterface {
  "given_name": string;
  "family_name": string;
  "email": string;
  [key: string]: string;
}
@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignupModalComponent implements OnInit {
confirmPassword: string = '';

  // Attributes for sign up
  isLoading:boolean = false;
  fname:string = '';
  lname:string = '';
  email:string = '';
  username:string = '';
  password:string = '';
  
  //attribute for verification
  code: string = '';

  //used to display from sign up form to verification form
  isConfirmed: boolean = false;

  constructor() {

   }

  ngOnInit(): void {

  }

  //check form 
  formCheck(form: NgForm): boolean {
    let missing: string[] = [];
    if(form.value.fname == '') {
      missing.push(" First Name");
    }
    if(form.value.lname == '') {
      missing.push(" Last Name");
    }
    if(form.value.email == '') {
      missing.push(" Email");
    }


    if(form.value.username == '') {
      missing.push(" Username");
    }
    if(form.value.password == '') {
      missing.push(" Password")
    }
    if(missing.length != 0) {
      alert("Please add the following:"+ missing);
      return false;
    }

    if(this.confirmPassword != this.password) {
      alert("Make sure both passwords match");
      return false;
    }
    return true;
  }

  //sign up form function
  onSignUp(form: NgForm){
    let formReady: boolean = this.formCheck(form);
    if(!formReady) {
      return;
    }
    if(this.confirmPassword != this.password) {
      alert("Passwords do not match");
      return;
    }
    if (form.valid) {
     this.isLoading = true;
     var poolData = {
       UserPoolId: environment.cognitoUserPoolId,
       ClientId: environment.cognitoAppClientId
     };
     var userPool = new CognitoUserPool(poolData);
     var attributeList = [];
     let formData:formDataInterface = {
       "given_name": this.fname,
       "family_name": this.lname,
       "email": this.email,
     }

     for (let key  in formData) {
       let attrData = {
         Name: key,
         Value: formData[key]
       }
       let attribute = new CognitoUserAttribute(attrData);
       attributeList.push(attribute)
     }
     userPool.signUp(this.username, this.password, attributeList, [], (
       err,
       result
     ) => {
       this.isLoading = false;
       if (err) {
         alert(err.message || JSON.stringify(err));
         return;
       }
       this.isConfirmed = true;
     });
    }
 }

 // verify form function
 onVerify(form: NgForm) {
  let poolData = {
    UserPoolId: environment.cognitoUserPoolId,
    ClientId: environment.cognitoAppClientId
  };
  let userPool = new CognitoUserPool(poolData);
  const userData = {
    Username: this.username,
    Pool: userPool
   };

  let cognitoUser = new CognitoUser(userData);

  cognitoUser?.confirmRegistration(this.code, true, (
    err,
    result
  ) => {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
    });
    alert("You're signed up!");
  } 
}
