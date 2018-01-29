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
    this.userSvc.getUsers().subscribe(usrs => this.users = usrs.filter(u => u.isActive === false));
  }

  activate(user: User): void {
    this.userSvc.updateStatus(user, true);
  }
}
