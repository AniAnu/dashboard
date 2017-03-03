import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';




const styles   = require('./login.scss');
const template = require('./login.html');

// @Component({
//   selector: 'login',
//   templateUrl: './login.html',
// })
// export class Login {

//   public form:FormGroup;
//   public email:AbstractControl;
//   public password:AbstractControl;
//   public submitted:boolean = false;

//   constructor(fb:FormBuilder) {
//     this.form = fb.group({
//       'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
//       'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
//     });

//     this.email = this.form.controls['email'];
//     this.password = this.form.controls['password'];
//   }

//   public onSubmit(values:Object):void {
//     this.submitted = true;
//     if (this.form.valid) {
//       // your code goes here
//       // console.log(values);
       
//   }
// }
// }


@Component({
  selector: 'login',
  template: template,
  styles: [ styles ]
})
export class Login {
  constructor(public router: Router, public http: Http) {
  }

  login(event, email, password) {
    event.preventDefault();
    let body = JSON.stringify({ email, password });
    this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
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

  register(event) {
    event.preventDefault();
    this.router.navigate(['register']);
  }
}
