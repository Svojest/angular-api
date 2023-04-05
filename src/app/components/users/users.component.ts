import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/interface';
import { ResourcesService } from 'src/app/service/resources.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: IUser[];

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((user) => {
      this.users = user.data;
    });
  }
  delete(user: IUser): void {
    this.users = this.users.filter((u) => u !== user);
    this.userService.deleteUser(user.id).subscribe();
  }
}
