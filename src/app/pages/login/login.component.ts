import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { LoginPayload } from 'src/app/models/login-payload';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import {ToastrService} from 'ngx-toastr';
import {Auth} from 'src/app/models/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  User!: Auth;

  /**
   * Initializes the register form with empty fields and validators.
   */
  constructor(private fb: FormBuilder, private authService: AuthServiceService, private router:Router, private toastr: ToastrService ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  /**
   * Submits the registration form and sends the payload to the backend API.
   * If the form is invalid, logs an error message to the console.
   */
  submitForm(): void {
    if (this.loginForm.invalid) {
      console.log('This form is invalid');
      const username = this.loginForm.controls['username'].value;
      if(username.length === 0){
        this.loginForm.controls['username'].markAsTouched;
      }

      const password = this.loginForm.controls['password'].value;
      if(password.length === 0){
        this.loginForm.controls['password'].markAsTouched;
      }

      this.loginForm.reset();
      return;
    }
    
    console.log(this.loginForm.value);
    
    // The payload to be sent to the backend API
    const payload: LoginPayload = {
      username: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value,
      
    };

    // Call the authentication service to register the user
    this.authService.login(payload).subscribe({
        next: value => {
          // Handle the success response
          // TODO: Add code for handling success response
          //console.log("username in login " + value.username );
          //console.log("token in login " + value.token);
          //save in storage
          this.authService.setSessionObj(value);

          const jsonData = this.authService.getSessionObj();
          
          //const parsedData = JSON.parse(jsonData);
          //console.log(parsedData.id)

          this.router.navigate(['/recipes']);
        },
        error: error => {
          // Handle the error response
          // TODO: Add code for handling error response
          this.toastr.error(error.message);
          console.log(error.error.message);
        }
    });
  }
}