import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  errorMessage: any;
  successMessage!: string;
forgetpassword() {
throw new Error('Method not implemented.');
}
  myForm!: FormGroup;
  errorMsg: string = '';
  authservice: any;
  message!: string;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  
  get email() {
    return this.myForm.get('email');
  }
  forgetPasswordUser() {
      const { email } = this.myForm.value;
      this.authService.forgetPasswordUser(email)
        .then(() => {
          console.log("✅ Email de réinitialisation envoyé !");
          this.successMessage = "Un email de réinitialisation a été envoyé.";
        })
        .catch(error => {
          console.error("❌ Erreur de réinitialisation :", error);
          this.errorMessage = error.message;
        });
    }
  }

