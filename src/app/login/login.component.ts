import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private afAuth: AngularFireAuth) {}

  login() {
    this.afAuth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  ngOnInit(): void {}
}
