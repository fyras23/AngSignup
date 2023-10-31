import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sgin-up',
  templateUrl: './sgin-up.component.html',
  styleUrls: ['./sgin-up.component.css']
})
export class SginUpComponent implements OnInit {

  constructor(private userService: UsersService,private router: Router,
    private authService : AuthService) {}

  user = new User();
  confirmPassword!: string;
  emailError!: boolean;
  passwordMismatchError!: boolean;

  ngOnInit(): void {}

  register() {
    if (this.user.password !== this.confirmPassword) {
      this.passwordMismatchError = true;
      return;
    }
    console.log(this.user);
    this.userService.registerUser(this.user).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.log(error);
        this.emailError = true;
      },
    });}

}
