import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {User} from './user.model';
import {CounterService} from './counter.service';

@Injectable( )
export class UsersService {
  users: User[];

  constructor(private counterService: CounterService) {
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

  getActivatedCounter() {
    return this.counterService.activatedCounter;
  }

  getDeactivatedCounter() {
    return this.counterService.deactivatedCounter;
  }

  updateStatus(user: User, isToActivate: boolean) {
    user.isActive = isToActivate;

    if (isToActivate) {
      this.counterService.activatedCounter++;
    } else {
      this.counterService.deactivatedCounter++;
    }
  }
}
