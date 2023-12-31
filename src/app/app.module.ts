import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
//import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './pages/login/login.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchcusineComponent } from './components/searchcusine/searchcusine.component';
import { MyfavoritesComponent } from './pages/myfavorites/myfavorites.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    RegisterComponent,
    LoginComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    SearchComponent,
    SearchcusineComponent,
    MyfavoritesComponent,
    ProfileComponent,   
  ],

  imports: [
    BrowserModule,  // Required module for running the application in a browser environment
    AppRoutingModule, // Module that configures and manages application routes
    ReactiveFormsModule, // Module for working with reactive forms
    HttpClientModule, // Module for making HTTP requests
    BrowserAnimationsModule, // required animations module
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), // ToastrModule added
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
