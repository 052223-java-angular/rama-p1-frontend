import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipePayload } from '../models/recipe-payload';
import { Recipe } from '../models/recipe';
import {Review} from '../models/review';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { CusinePayload } from '../models/cusine-payload';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewServiceService {
  baseUrl = 'http://localhost:8080/cookbook/api';

  constructor(private http: HttpClient,  private authService: AuthServiceService,) { }

  getReviewsByRid(id: string) {
    console.log("id in getReviewsbyRid " + id);
    let test1:string = `${this.baseUrl}/review/byrid/${id}`;
    console.log("test1 " + test1);
    return this.http.get<any[]>(test1);
  }
  
  findReviewByUsername(reviews: Review[], username: string): Review | null {
    const matchingReview = reviews.find((review: Review) => review.username === username);
    return matchingReview ? matchingReview : null;
  }

  editReview( payload: { comments: string; rate: Number, recipe_id: string; }){
    const url:string = `${this.baseUrl}/review/create`;
  
    const jsonData = this.authService.getSessionObj();
    const parsedData = JSON.parse(jsonData);

    console.log(parsedData.token);
    let token:string = parsedData.token;
    //create a payload and send it to client
    const httpOptions = {
      headers: new HttpHeaders({
        'auth-token': token
      })
    };

    this.http.post(url, payload, httpOptions).subscribe(
      response => {
        // Handle the response
      },
      error => {
        // Handle errors
        console.log(error);
        console.log("err");
      }
    );

    //this.http.post<any>(`${this.baseUrl}/review/create`);
  }

  addReview( payload: { comments: string; rate: Number; recipe_id: string;  }){
    const url:string = `${this.baseUrl}/review/create`;
  
    const jsonData = this.authService.getSessionObj();
    const parsedData = JSON.parse(jsonData);

    console.log(parsedData.token);
    let token:string = parsedData.token;
    //create a payload and send it to client
    const httpOptions = {
      headers: new HttpHeaders({
        'auth-token': token
      })
    };
    

    this.http.post(url, payload, httpOptions).subscribe(
      response => {
        // Handle the response
      },
      error => {
        // Handle errors
        console.log(error);
        console.log("err");
      }
    );

  }

  deleteReview(recipe_id: string): void {
    // Set the request headers with the authentication token

    const jsonData = this.authService.getSessionObj();
    const parsedData = JSON.parse(jsonData);
    let token:string = parsedData.token;

    const url:string = `${this.baseUrl}/review/delete/${recipe_id}`;
    
    const headers = new HttpHeaders().set('auth-token', `${token}`);

    // Set the request options with the headers
    const options = { headers };

    // Make the DELETE request
    this.http.delete<any>(url, options)
      .subscribe(
        response => {
          // Handle the success response
          console.log('Data deleted successfully');
          // Additional logic...
        },
        error => {
          // Handle the error response
          console.error('Error deleting data:', error);
          // Additional error handling...
        }
      );
  }

  // deleteReview( payload: { recipe_id: string }, recipe_id:string ){
  //   const url:string = `${this.baseUrl}/review/delete/${recipe_id}`;
  
  //   const jsonData = this.authService.getSessionObj();
  //   const parsedData = JSON.parse(jsonData);

  //   console.log(parsedData.token);
  //   let token:string = parsedData.token;

  //   // Set the request headers with the authentication token
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);

  //   //create a payload and send it to client
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'auth-token': token
  //     })
  //   };
    

  //   this.http.delete<any>(url, { headers, body: JSON.stringify(data)}).subscribe(
  //     response => {
  //       // Handle the response
  //     },
  //     error => {
  //       // Handle errors
  //       console.log(error);
  //       console.log("err");
  //     }
  //   );

  // }


    
}






