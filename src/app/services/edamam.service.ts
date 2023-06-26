import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class EdamamService {

  //private apiUrl = 'https://api.edamam.com/api/food/jokes/random';
  private apiKey = 'cd6f0256ec3a0fc919e09e61bc63039f' //  API key
  private appId = '63bcab41'
  private apiUrl = 'https://v2.jokeapi.dev/joke/Any';

  constructor(private http: HttpClient,  private authService: AuthServiceService ) { }

  getRandomJoke() {
    //return this.http.get(`${this.apiUrl}?app_id=${this.appId}&app_key=${this.apiKey}`);
    console.log("getting jokes")
    return this.http.get(`https://v2.jokeapi.dev/joke/Any`);
  }

  
}
