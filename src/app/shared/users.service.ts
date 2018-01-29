import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {User} from './user.model';

@Injectable()
export class UsersService {
  users: User[];

  constructor() {
    this.users = [
      new User('Max', true),
      new User('Anna', true),
      new User('Chris', false),
      new User('Manu', false)
    ];
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  updateStatus(user: User, isToActivate: boolean) {
    user.isActive = isToActivate;
  }
}
