import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { RegisterPayload } from 'src/app/models/register-payload';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';
import {ToastrService} from 'ngx-toastr';
import {Recipe} from 'src/app/models/recipe';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[] = [];
  /**
   * Initializes the register form with empty fields and validators.
   */
  constructor(private recipeService: RecipeServiceService, private router:Router, private toastr: ToastrService ) {}
  
  ngOnInit(): void {


     // Call the authentication service to register the user
    this.recipeService.getRecipes().subscribe({
      next: recipes => {
        // Handle the success response
        // TODO: Add code for handling success response
        this.recipes = recipes;
      },
      error: error => {
        // Handle the error response
        // TODO: Add code for handling error response
        this.toastr.error(error.error.message);
        console.log(error.error.message);
      }
    });
  }



   


}
