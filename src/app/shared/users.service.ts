import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {User} from './user.model';
import {CounterService} from './counter.service';

@Injectable( )
export class UsersService {
  activeUsers: User[];
  inactiveUsers: User[];

  activatedCnt = 0;
  deactivatedCnt = 0;

  constructor(private counterService: CounterService) {
    this.activeUsers = [
      new User('Max', true),
      new User('Anna', true)
    ];

    this.inactiveUsers = [
      new User('Chris', false),
      new User('Manu', false)

    ];
  }

  getActiveUsers(): Observable<User[]> {
    return of(this.activeUsers);
  }

  getInactiveUsers(): Observable<User[]> {
    return of(this.activeUsers);
  }

  getActivatedCounter() {
    return this.counterService.activatedCounter;
  }

  getDeactivatedCounter() {
    return this.counterService.deactivatedCounter;
  }

  updateStatus(user: User, isToActivate: boolean) {

    if (isToActivate) {
      // Update the inactiveUsers and activeUsers accordingly.
      this.inactiveUsers.splice(this.inactiveUsers.indexOf(user), 1);
      this.activeUsers.push(user);
      this.counterService.activatedCounter++;
    } else {
      this.activeUsers.splice(this.activeUsers.indexOf(user), 1);
      this.inactiveUsers.push(user);
      this.counterService.deactivatedCounter++;
    }

    // update status later, due to the indexOf may check the status.
    user.isActive = isToActivate;

    this.activatedCnt = this.counterService.activatedCounter;
    this.deactivatedCnt = this.counterService.deactivatedCounter;
  }
}
