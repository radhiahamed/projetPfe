import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  myForm!: FormGroup;
  errorMsg: any;
  successMsg!: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,     private db: AngularFireDatabase) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.myForm = this.fb.group({
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]+')
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]+')
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required
      ])
    }, { validators: this.passwordMatchValidator });
  }

  // Vérifier si les mots de passe correspondent
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  // Accès facile aux champs du formulaire
  get firstname() {
    return this.myForm.get('firstname');
  }
  get lastname() {
    return this.myForm.get('lastname');
  }
  get email() {
    return this.myForm.get('email');
  }
  get password() {
    return this.myForm.get('password');
  }
  get confirmPassword() {
    return this.myForm.get('confirmPassword');
  }

  // Méthode d'inscription
  register() {
    if (this.myForm.invalid) return;

    const { email, password } = this.myForm.value;
    this.authService.createUser(email, password).then(
      () => {
        this.successMsg = "Account successfully registered!";
        this.errorMsg = "";
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000); // Redirection après 2s
      },
      (error) => {
        this.errorMsg = error.message;
        this.successMsg = "";
      }
    );
  }
}
