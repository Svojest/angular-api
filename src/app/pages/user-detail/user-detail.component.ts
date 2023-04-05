import { Component, Input, OnInit } from '@angular/core';
// import { IPage, IUser } from 'src/app/models/interface';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  // Не удалось типизировать
  user: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.userService.getUser(id).subscribe((user) => (this.user = user.data));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.user) {
      this.userService.updateUser(this.user).subscribe();
    }
  }

  editUser(): void {}
}
