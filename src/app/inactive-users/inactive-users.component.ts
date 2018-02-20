import {Component, Input, OnInit} from '@angular/core';
import {User} from '../shared/user.model';
import {UsersService} from '../shared/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input()
  users: User[];

  constructor(private userSvc: UsersService) {}

  ngOnInit(): void {
    this.users = this.userSvc.inactiveUsers;
  }

  activate(user: User): void {
    this.userSvc.updateStatus(user, true);
  }
}
