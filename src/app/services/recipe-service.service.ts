import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipePayload } from '../models/recipe-payload';
import { Recipe } from '../models/recipe';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { CusinePayload } from '../models/cusine-payload';
import { AuthServiceService } from 'src/app/services/auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  baseUrl = 'http://localhost:8080/cookbook/api';


  constructor(private http: HttpClient,  private authService: AuthServiceService,) { }

  getRecipesByCalories() {
    return this.http.get<any[]>(`${this.baseUrl}/recipe/all`);
  }

  getRecipes() {
    return this.http.get<any[]>(`${this.baseUrl}/recipe/all`);
  }

  // getRecipesById(id: string) {
  //   return this.http.get<any>(`${this.baseUrl}/recipe/byid/${id}`);
  // }

  getRecipesById(id: string) {
    console.log("id in service " + id);
    //let  externalApi = "https://api.edamam.com/api/recipes/v2?type=any&q=salad&app_id=63bcab41&app_key=cd6f0256ec3a0fc919e09e61bc63039f&diet=high-fiber&health=alcohol-free&cuisineType=Asian";
    //let externalApi = `https://api.spoonacular.com/recipes/${id}/information?apiKey=29d3edda2a424e8383324a1242cb4790`;
    //let externalApi = "https://api.edamam.com/api/recipes/v2/b79327d05b8e5b838ad6cfd9576b30b6?type=public&app_id=63bcab41&app_key=cd6f0256ec3a0fc919e09e61bc63039f";
    let externalApi = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=63bcab41&app_key=cd6f0256ec3a0fc919e09e61bc63039f`;
    console.log("url for " + externalApi);
    return this.http.get<any>(`${externalApi}`);
  }

  // getReviewsByRid(id: string) {
  //   console.log("id in getReviewsbyRid " + id);
  //   //let test:string = 'http://localhost:8080/cookbook/api/review/byrid/2dbeaf3e96adcdcbcb3a4445ec9729d9';
  //   let test1:string = `${this.baseUrl}/review/byrid/${id}`;
  //   console.log("test1 " + test1);
  //   //return this.http.get<any[]>(`${this.baseUrl}/review/byrid/${id}`);
  //   return this.http.get<any[]>(test1);
  // }

  searchByCusine(cusine: string){
    return this.http.get<any[]>(`${this.baseUrl}/recipe/bycusine/${cusine}`);
  }

  // editReview( payload: { comments: string; rate: Number, recipe_id: string; }){
  //   const url:string = `${this.baseUrl}/review/create`;
  
  //   const jsonData = this.authService.getSessionObj();
  //   const parsedData = JSON.parse(jsonData);

  //   console.log(parsedData.token);
  //   let token:string = parsedData.token;
  //   //create a payload and send it to client
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'auth-token': token
  //     })
  //   };


  //   this.http.post(url, payload, httpOptions).subscribe(
  //     response => {
  //       // Handle the response
  //     },
  //     error => {
  //       // Handle errors
  //       console.log(error);
  //       console.log("err");
  //     }
  //   );

  //   //this.http.post<any>(`${this.baseUrl}/review/create`);
  // }

  

  // searchByRange(payload: CusinePayload) :  Observable<Recipe>{
  //   return this.http.post<Recipe>(`${this.baseUrl}/recipe/calrange`, payload );
  // }
}
