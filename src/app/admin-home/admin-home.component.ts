import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { ReturnUserDto } from '../models/user/returnUser.dto';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, RouterLink],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  user!: ReturnUserDto;
  faCartShopping = faCartShopping;
  faArrowRightFromBracket = faArrowRightFromBracket;

  constructor(
    private authService: AuthService,
  ){}
}
