import { Component } from '@angular/core';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';
import {Router} from '@angular/router';
import { RegisterPayload } from 'src/app/models/register-payload';
import {ToastrService} from 'ngx-toastr';
import {Recipe} from 'src/app/models/recipe';
import { CusinePayload } from 'src/app/models/cusine-payload';
import { RecipeDetail } from 'src/app/models/recipeDetail';


@Component({
  selector: 'app-searchcusine',
  templateUrl: './searchcusine.component.html',
  styleUrls: ['./searchcusine.component.css']
})
export class SearchcusineComponent  {


  dropdownOptions: string[] = ['soup', 'salad', 'desert'];
  selectedOption!: string;
  searchText!: number;
  searchText2!: number;
  searchTextid!: string;
  recipes: Recipe[] = [];
  recipe: Recipe | undefined;
  recipeDetail!: RecipeDetail;

  /**
   * Initializes the register form with empty fields and validators.
   */
  constructor(private recipeService: RecipeServiceService, private router:Router, private toastr: ToastrService ) {}
  
    search(): void {
      // Perform search logic using selectedOption and searchText
      console.log('Selected Option:', this.selectedOption);
      //console.log('Search Text:', this.searchText);

      this.recipeService.searchByCusine(this.selectedOption).subscribe({
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

    searchByRange(): void {
      // Perform search logic using searchText
      //console.log('Selected Option:', this.selectedOption);
      console.log('Search Text:', this.searchText);
      console.log('Search Text:', this.searchText2);

      this.recipeService.searchByRange(this.searchText, this.searchText2).subscribe({
        next: recipes => {
          // Handle the success response
          // TODO: Add code for handling success response
          console.log("processing data");
          console.log(recipes.length);
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

    //
    searchById(): void {
      // Perform search logic using searchText
      //console.log('Selected Option:', this.selectedOption);
      console.log('Search Text:', this.searchTextid);
     

      this.recipeService.getRecipesById(this.searchTextid).subscribe({
        next: r => {
          console.log("SearchById" + r.recipe.label);
          this.recipeDetail = r.recipe;
          
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
