import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  // ✅ Crée un compte utilisateur
  createUser(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User successfully registered!');
        this.router.navigate(['/home']);
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
        this.router.navigate(['/home']);
        return true;
      })
      .catch(error => {
        console.error('Login Error:', error);
        throw error;
      });
  }

  // ✅ Réinitialise le mot de passe
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

  // ✅ Déconnecte l'utilisateur
  signOutUser() {
    return this.afAuth.signOut()
      .then(() => {
        console.log('User signed out!');
        this.router.navigate(['/login']);
      })
      .catch(error => {
        console.error('Sign Out Error:', error);
        throw error;
      });
  }

  // 🔒 Vérifie si l'utilisateur est connecté
  isAuthenticated(): boolean {
    const user = localStorage.getItem('user');
    return !!user; // Renvoie true si l'utilisateur est connecté
  }
}
