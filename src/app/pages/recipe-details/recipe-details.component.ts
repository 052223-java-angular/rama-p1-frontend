import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Recipe } from 'src/app/models/recipe';
import { RecipeDetail } from 'src/app/models/recipeDetail';
import { Review } from 'src/app/models/review';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';
import { ReviewServiceService } from 'src/app/services/review-service.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
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
  review: Review | null | undefined;

  newReview: Review = {
    rating: 0, comment: '',
    id: '',
    username: '',
    rid: ''
  };
  

  constructor(private recipeService: RecipeServiceService, 
    private reviewService: ReviewServiceService, 
    private route: ActivatedRoute, private authService: AuthServiceService,
    private router:Router, private toastr: ToastrService ){
      this.editMode = [];
    }
  
  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.recipeId = params['id'];
      //console.log("on constructor init id is " + this.recipeId);
    });

     // Call the recipe service to getinfo from external api 
     this.recipeService.getRecipesById(this.recipeId).subscribe({
      next: recipeDetail => {
        console.log("recipe " + recipeDetail.recipe.label);
        this.recipeDetail = recipeDetail.recipe;
      },
      error: error => {
        // Handle the error response
        // TODO: Add code for handling error response
        this.toastr.error(error.error.message);
        console.log(error.error.message);
      }
    });

    this.reviewService.getReviewsByRid(this.recipeId).subscribe({
      next: rL => {
        // Handle the success response
        const username:string = this.authService.getUserName();
        const review1 = this.reviewService.findReviewByUsername(rL, username);
        console.log(review1);
        this.review = review1;
        console.log(this.review);
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
   
     this.reviewService.editReview(payload);
     //this.router.navigate(['/recipes']);
     //location.reload();
     this.router.navigate(['/recipe-details', recipe_id]);
     
  }

  deleteReview(review: Review) {
    // Handle the delete functionality for the selected review
    console.log('Delete review:', review);
    this.reviewService.deleteReview(this.recipeId);
    //location.reload();
    this.router.navigate(['/recipe-details', this.recipeId]);

  }

  addReview(): void {
    // Logic to process the newReview object
    // e.g., send it to a service for further processing

    const rate = this.newReview.rating;
    const comment = this.newReview.comment;
    const username = this.authService.getUserName();

    // Log the values (replace with your desired logic)
    console.log('Rating:', rate);
    console.log('Comment:', comment);

    const payload = {
      "comments": comment,
      "rate": rate, 
      "recipe_id": this.recipeId,
    };

    this.reviewService.editReview(payload);
     //this.router.navigate(['/recipes']);
     this.router.navigate(['/recipe-details', this.recipeId]);

  }


}
