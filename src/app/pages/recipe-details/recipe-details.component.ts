import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Recipe } from 'src/app/models/recipe';
import { RecipeDetail } from 'src/app/models/recipeDetail';
import { Review } from 'src/app/models/review';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit{

  recipeId!: string;
  recipe!: Recipe;
  recipeDetail!: RecipeDetail;
  //reviewList!: Recipe[];
  reviewList!: Review[];
  recipeList!: Recipe[];
  editMode!: boolean[];
  

  constructor(private recipeService: RecipeServiceService, private route: ActivatedRoute, 
    private router:Router, private toastr: ToastrService ){
      this.editMode = [];
    }
  
  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.recipeId = params['id'];
      console.log("on constructor init id is " + this.recipeId);
    });



     // Call the authentication service to register the user
     this.recipeService.getRecipesById(this.recipeId).subscribe({
      next: recipeDetail => {
        //console.log("recipe " + recipeDetail.recipe.label);
        this.recipeDetail = recipeDetail.recipe;
      },
      error: error => {
        // Handle the error response
        // TODO: Add code for handling error response
        this.toastr.error(error.error.message);
        console.log(error.error.message);
      }
    });

    this.recipeService.getReviewsByRid(this.recipeId).subscribe({
      next: rL => {
        // Handle the success response
        this.reviewList = rL;
      },
      error: error => {
        // Handle the error response
        // TODO: Add code for handling error response
        this.toastr.error(error.error.message);
        console.log(error.error.message);
      }
    });

  } //endofngInit

  editReview(review: Review) {
    // Handle the edit functionality for the selected review
    console.log('Edit review:', review);
    const comment = review.comment;
    const rate = review.rating;
    const recipe_id = review.rid;
     
    // The payload to be sent to the backend API
    const payload = {
      "comments": comment,
      "rate": rate, 
      "recipe_id": recipe_id 
    };
     // Call the authentication service to register the user
     this.recipeService.editReview(payload);
     //this.router.navigate(['/recipes']);
     this.router.navigate(['/recipe-details', recipe_id]);
     
     
  }

  deleteReview(review: Review) {
    // Handle the delete functionality for the selected review
    console.log('Delete review:', review);
  }

  toggleEditMode(index: number) {
    this.editMode[index] = !this.editMode[index];
  }

}
