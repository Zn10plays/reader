import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  control = this.fb.group({
    email: [null, Validators.compose([Validators.email, Validators.required])],
    password: [null, Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    if (this.control.invalid) return
    console.log('hello monkey')
    this.auth.signInWithEmailAndPassword(this.control.controls['email'].value, this.control.controls['password'].value)
  }
}
