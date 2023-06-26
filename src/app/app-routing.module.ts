import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';
import { SearchComponent } from './pages/search/search.component';
import { MyfavoritesComponent } from './pages/myfavorites/myfavorites.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, // Route for the home page];
  { path: 'about', component: AboutComponent }, // Route for the about page
  { path: 'register', component: RegisterComponent }, // Route for the register page
  { path: 'login', component: LoginComponent }, // Route for the register page
  { path: 'recipes', component: RecipesComponent }, // Route for the register page
  { path: 'recipe-details/:id', component: RecipeDetailsComponent }, // Route for the register page
  { path: 'myfavorites', component: MyfavoritesComponent }, // Route for the register page
  { path: 'search', component: SearchComponent }, // Route for the register page
  { path: 'profile', component: ProfileComponent }, // Route for the register page
  { path: '**', component:NotFoundComponent } // Route for handling not-found pages
 ] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
