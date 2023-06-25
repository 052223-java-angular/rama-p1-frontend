import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(protected authService: AuthServiceService) {}

  logout(): void {
    // Set isLoggedIn to false
    this.authService.logout();
    //reload to take affect
    //location.reload();

  }

  

}
