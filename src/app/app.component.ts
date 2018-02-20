import { Component, OnInit } from '@angular/core';
import { UsersService } from './shared/users.service';

/**
  note the UserService is referred in app.module.ts, for all components.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular 5 Services Practice';

  constructor(private userService: UsersService) {}

  activatedCnt = 0;
  deactivatedCnt = 0;

  ngOnInit(): void {
    this.userService.activatedCntChanged.subscribe(cnt => this.activatedCnt = cnt );
    this.userService.deactivatedCntChanged.subscribe(cnt => this.deactivatedCnt = cnt);
  }

}
