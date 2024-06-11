import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../services/user/user.service';
import { ReturnUserDto } from '../models/user/returnUser.dto';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  user!: ReturnUserDto;
  faCartShopping = faCartShopping;
  faArrowRightFromBracket = faArrowRightFromBracket;

  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.userService.getUserById().subscribe({
      next: (response: ReturnUserDto) => {
        this.user = response;
      },
      error: (err) => {

      }
    })
  }

  logout(): void {
    window.location.reload();
    this.authService.logout();
  }
}