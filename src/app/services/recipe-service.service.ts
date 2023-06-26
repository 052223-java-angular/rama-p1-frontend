import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipePayload } from '../models/recipe-payload';
import { Recipe } from '../models/recipe';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { CusinePayload } from '../models/cusine-payload';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { FavRecipe } from '../models/favRecipe';
import { RecipeDetailsComponent } from '../pages/recipe-details/recipe-details.component';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  //baseUrl = 'http://localhost:8080/cookbook/api';
  baseUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient,  private authService: AuthServiceService,) { }

  getRecipesByCalories() {
    return this.http.get<any[]>(`${this.baseUrl}/recipe/all`);
  }

  getRecipes() {
    console.log("getting recipes");
    const jsonData = this.authService.getSessionObj();
    const parsedData = JSON.parse(jsonData);
    let token:string = parsedData.token;
    
    let url = `${this.baseUrl}/favorite/myfav`;
    // console.log("url for fav " + url );
    console.log("token is " + token);

    //const headers = new HttpHeaders().set('auth-token', `${token}`);
    const httpOptions = {
      headers: new HttpHeaders({
        'auth-token': token
      })
    };

    const payload = {
      "comments": "test"
    
    };

    // Set the request options with the headers
    //const options = { headers };
    //const headers = new HttpHeaders().set('Access-Control-Allow-Origin', 'http://rscookbookbucket.s3-website-us-west-1.amazonaws.com');
    
    return this.http.post<any[]>(`${this.baseUrl}/recipe/all`, payload, httpOptions);
    //return this.http.get<any[]>(`${this.baseUrl}/recipe/all`, {headers} );
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

  getMyFavorites() {
    const jsonData = this.authService.getSessionObj();
    const parsedData = JSON.parse(jsonData);
    let token:string = parsedData.token;
    
    let url = `${this.baseUrl}/favorite/myfav`;
    console.log("url for fav " + url );
    console.log("token is " + token);

    const headers = new HttpHeaders().set('auth-token', `${token}`);

    // Set the request options with the headers
    const options = { headers };

    // Make the POST request
    return this.http.post<[FavRecipe]>(url, null, options);
  }

  addToFavorites(recipe_id:string): boolean {
    const url:string = `${this.baseUrl}/favorite/create`;
    let returnVal :boolean = true;

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
    
    // The payload to be sent to the backend API
    const payload = {
      "recipe_id": recipe_id 
    };

    this.http.post(url, payload, httpOptions).subscribe(
      response => {
        // Handle the response
        returnVal = true;
      
      },
      error => {
        // Handle errors
        console.log(error);
        console.log("err");
        returnVal = false;
      }
    );
    return returnVal;
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

  removeFromFavorites(recipe_id:string):boolean {

    let returnVal:boolean = true;

    const jsonData = this.authService.getSessionObj();
    const parsedData = JSON.parse(jsonData);
    let token:string = parsedData.token;

    const url:string = `${this.baseUrl}/favorite/delete/${recipe_id}`;
    
    const headers = new HttpHeaders().set('auth-token', `${token}`);

    // Set the request options with the headers
    const options = { headers };

    // Make the DELETE request
    this.http.delete<any>(url, options).subscribe(
        response => {
          // Handle the success response
          console.log('Data deleted successfully');
          returnVal = true;
       
        },
        error => {
          // Handle the error response
          console.error('Error deleting data:', error);
          returnVal = false;
          
        }
      );
      return returnVal;
  }

  searchByRange(lowerRange:number, upperRange:number) {
     // The payload to be sent to the backend API
     const url:string = `${this.baseUrl}/recipe/calrange`;
      // The payload to be sent to the backend API
    console.log("lr " + lowerRange + " " + upperRange );
    
    const payload = {
      "lowerRange": lowerRange,
      "upperRange": upperRange
    };

    const headers = new HttpHeaders().set('Dummy-Header', 'dummy-value');
     return this.http.post<Recipe[]>(url, payload, {headers});
     

  }


}
