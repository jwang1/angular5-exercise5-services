import {Component, DoCheck } from '@angular/core';
import {User} from './shared/user.model';
import {UsersService} from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'Angular 5 Services Practice.';

  constructor(private userService: UsersService) {}

  activeUsers: User[];
  inactiveUsers: User[];

  ngDoCheck(): void {
    let users: User[];

    this.userService.getUsers().subscribe( urs => users = urs );

    this.activeUsers = users.filter(u => u.isActive === true);
    this.inactiveUsers = users.filter(u => u.isActive === false);
  }
}
