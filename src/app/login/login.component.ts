import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm!: FormGroup;
  errorMsg: string = '';
  passwordMatchValidator: any;
  authservice: any;
  errorMessage: any;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.myForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    }, { validators: this.passwordMatchValidator });
  }
  get email() {
    return this.myForm.get('email');
  }
  get password() {
    return this.myForm.get('password');
  }
  login() {
    const { email, password } = this.myForm.value;
    this.authService.signInUser(email, password)
      .then((user) => {
        console.log("✅ Connexion réussie !", user);
        // Rediriger vers la page d'accueil ou autre
        this.router.navigate(['/home']);
      })
      .catch(error => {
        console.error("❌ Erreur de connexion :", error);
        this.errorMessage = error.message; // Affiche l'erreur à l'utilisateur
      });
  }
  
}




