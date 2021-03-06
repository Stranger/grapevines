import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";

import { Observable } from "rxjs/Observable";
import { ErrorObservable } from "rxjs/Observable/errorobservable";
import { of } from "rxjs/observable/of";
import { _throw } from "rxjs/observable/throw";

import {
  RegisterModel,
  AuthenticateModel,
  UserModel,
  ErrorModel
} from "../models/user.model";

@Injectable()
export class AuthService {
  constructor(private fireAuth: AngularFireAuth) {}

  logIn(auth: AuthenticateModel) {
    return new Promise((resolve, reject) => {
      return this.fireAuth.auth.setPersistence("session").then(() => {
        return this.fireAuth.auth
          .signInWithEmailAndPassword(auth.email, auth.password)
          .then((user: UserModel) =>
            resolve({ email: user.email, uid: user.uid })
          )
          .catch(err => {
            const { code, message } = err;
            return reject({ code, message });
          });
      });
    });
  }

  signUp(auth: RegisterModel): Promise<UserModel> {
    return new Promise((resolve, reject) =>
      this.fireAuth.auth
        .createUserWithEmailAndPassword(auth.email, auth.password)
        .then((user: UserModel) => {
          resolve({ email: user.email, uid: user.uid });
        })
        .catch(err => {
          const { code, message } = err;
          return reject({ code, message });
        })
    );
  }
}
