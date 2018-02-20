import {Component, Input, OnInit} from '@angular/core';
import {User} from '../shared/user.model';
import {UsersService} from '../shared/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input()
  users: User[];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
  }

  inactivate(user: User) {
    this.usersService.updateStatus(user, false);
  }
}
