import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  // ✅ Création d'un compte utilisateur
  createUser(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User successfully registered!');
        return true;
      })
      .catch(error => {
        console.error('Registration Error:', error);
        throw error;
      });
  }

  // ✅ Connexion utilisateur
  signInUser(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User successfully logged in!');
        return true;
      })
      .catch(error => {
        console.error('Login Error:', error);
        throw error;
      });
  }

  // ✅ Réinitialisation du mot de passe
  forgetPasswordUser(email: string) {
    return this.afAuth.sendPasswordResetEmail(email)
      .then(() => {
        console.log('Password reset email sent!');
        return true;
      })
      .catch(error => {
        console.error('Password Reset Error:', error);
        throw error;
      });
  }

  // ✅ Déconnexion de l'utilisateur
  signOutUser() {
    return this.afAuth.signOut()
      .then(() => {
        console.log('User signed out!');
        this.router.navigate(['/login']); // Redirection après déconnexion
      })
      .catch(error => {
        console.error('Sign Out Error:', error);
        throw error;
      });
  }
}
