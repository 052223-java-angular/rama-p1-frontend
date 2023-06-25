import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { RegisterPayload } from 'src/app/models/register-payload';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';
import {ToastrService} from 'ngx-toastr';
import {Recipe} from 'src/app/models/recipe';
import { FavRecipe } from 'src/app/models/favRecipe';
import {CombinedRecipe} from  'src/app/models/combinedRecipe';


@Component({
  selector: 'app-myfavorites',
  templateUrl: './myfavorites.component.html',
  styleUrls: ['./myfavorites.component.css']
})

export class MyfavoritesComponent implements OnInit {

  recipes: Recipe[] = [];
  myrecipes: FavRecipe[] = [];
  combinedData: CombinedRecipe[] = [];
  /**
   * Initializes the register form with empty fields and validators.
   */
  constructor(private recipeService: RecipeServiceService, private router:Router, private toastr: ToastrService ) {}
  
  async ngOnInit(): Promise<void> {

    await this.fetchData();
  }

  async fetchData() {
    try {
      const recipesPromise = this.recipeService.getRecipes().toPromise();
      const favoritesPromise = this.recipeService.getMyFavorites().toPromise();
  
      const [recipes, favorites] = await Promise.all([recipesPromise, favoritesPromise]);
  
      if (Array.isArray(recipes)) {
        this.recipes = recipes as Recipe[];
      }
  
      if (Array.isArray(favorites)) {
        this.myrecipes = favorites as FavRecipe[];
      }
  
      //this.recipes = recipes;
      //this.myrecipes = favorites;
  
      this.combineData();
    } catch (error) {
      //this.toastr.error(error.error.message);
      //console.log(error.error.message);
    }
  }

  // Combine the data based on recipe_id
  combineData() {
      // Only proceed if both recipes and myrecipes data are available
      if (this.recipes && this.myrecipes) {
        this.combinedData = this.recipes.map((recipe) => {
          const favorite = this.myrecipes.find((fav) => fav.recipe_id === recipe.id);
          return {
            recipe_id: recipe.id,
            cusine: recipe.cusine,
            calories: recipe.calories,
            title: recipe.title,
            url: recipe.url,
            favorite: !!favorite,
          };
        });
  
        console.log("combinedData", this.combinedData);
      }
  }

  addToFavorites(recipeId: string): void {
   
    let returnVal = this.recipeService.addToFavorites(recipeId);
    if ( returnVal ){
      // Update the favorite property in the combinedData array
      const recipe = this.combinedData.find(data => data.recipe_id === recipeId);
      if (recipe) { recipe.favorite = true; }
    }
  }
  
  removeFromFavorites(recipeId: string): void {
    let returnVal = this.recipeService.removeFromFavorites(recipeId);
    if ( returnVal ){
      const recipe = this.combinedData.find(data => data.recipe_id === recipeId);
      if (recipe) { recipe.favorite = false; }
    }
  }


}
  

/////////////////////////////////////////////
//async ngOnInit(): Promise<void> {

  //await this.fetchData();
  // this.recipeService.getRecipes().subscribe({
  //   next: rec => {
  //     // Handle the success response
  //     //console.log("r" + rec[0].id);

  //     for (const r of rec) {
  //       console.log("r " + r.id);
  //     }

  //     this.recipes = rec;
  //   },
  //   error: error => {
  //     // Handle the error response
  //     this.toastr.error(error.error.message);
  //     console.log(error.error.message);
  //   }
  // });


  // this.recipeService.getMyFavorites().subscribe({
  //   next: r => {
  //   // Handle the success response
  //     console.log("geto recipes" + r[0].title);
  //     console.log("geto recipes" + r[0].recipe_id);
  //     console.log("geto recipes" + r[0].username);
  //     //this.combineData();

  //     this.myrecipes = r;
  //     this.combineData();
  //     console.log(this.combinedData);

  //   },
  //   error: error => {
  //     // Handle the error response
  //     this.toastr.error(error.error.message);
  //     console.log("Error " + error.error.message);
  //   }

  // });
//}


 
  

   







