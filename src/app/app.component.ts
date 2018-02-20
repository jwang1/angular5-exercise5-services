import {Component, DoCheck, OnInit} from '@angular/core';
import {User} from './shared/user.model';
import {UsersService} from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit, DoCheck {
  title = 'Angular 5 Services Practice';

  constructor(private userService: UsersService) {}

  activatedCnt = 0;
  deactivatedCnt = 0;

  activeUsers: User[];
  inactiveUsers: User[];

  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }

  ngDoCheck(): void {
    this.activatedCnt = this.userService.activatedCnt;
    this.deactivatedCnt = this.userService.deactivatedCnt;
  }

}
