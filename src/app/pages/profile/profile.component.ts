import { Component, OnInit } from '@angular/core';
import { EdamamService } from 'src/app/services/edamam.service'; 
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  joke!: string;
  setup!: string;

  constructor(protected authService: AuthServiceService, private edamamService: EdamamService) { }

  ngOnInit() {
    this.getJoke();
  }

  getJoke() {
    this.edamamService.getRandomJoke().subscribe(
      (response: any) => {
        console.log("joke is " + response.setup);
        this.setup = response.setup;
        this.joke = response.delivery;
      },
      (error) => {
        console.log("Error in getting jokes" + error);
      }
    );
  }

}
