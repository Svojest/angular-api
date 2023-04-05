import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.warn(this.form.value.email);
    this.accountService
      .login(this.form.value.email!, this.form.value.password!)
      .pipe(first())
      .subscribe();
  }
}
