import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';


const styles   = require('./register.scss');
const template = require('./register.html');

// @Component({
//   selector: 'register',
//   templateUrl: './register.html',
// })
// export class Register {

//   public form:FormGroup;
//   public name:AbstractControl;
//   public email:AbstractControl;
//   public password:AbstractControl;
//   public repeatPassword:AbstractControl;
//   public passwords:FormGroup;

//   public submitted:boolean = false;

//   constructor(fb:FormBuilder) {

//     this.form = fb.group({
//       'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
//       'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
//       'passwords': fb.group({
//         'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
//         'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
//       }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
//     });

//     this.name = this.form.controls['name'];
//     this.email = this.form.controls['email'];
//     this.passwords = <FormGroup> this.form.controls['passwords'];
//     this.password = this.passwords.controls['password'];
//     this.repeatPassword = this.passwords.controls['repeatPassword'];
//   }

//   public onSubmit(values:Object):void {
//     this.submitted = true;
//     if (this.form.valid) {
//       // your code goes here
//       // console.log(values);

     
//     }
//   }
// }



@Component({
  selector: 'register',
  template: template,
  styles: [ styles ]
})
export class Register {
  constructor(public router: Router, public http: Http) {
  }

  register(event, email, password) {
    event.preventDefault();
    let body = JSON.stringify({ email, password });
    this.http.post('http://localhost:3001/users', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigate(['dashboard']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  login(event) {
    event.preventDefault();
    this.router.navigate(['login']);
  }

}

