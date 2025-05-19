import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
  constructor(private http: HttpClient, private db: AngularFireDatabase) {}

  // 🔹 Récupérer les restaurants nettoyés à partir d'un fichier JSON local
  getCleanedRestaurants(): Observable<any[]> {
    return this.http.get<any[]>('assets/data/cleaned_data.json');
  }

  // 🔹 Trier les restaurants par note décroissante
  sortRestaurantsByRating(restaurants: any[]): any[] {
    return restaurants.sort((a, b) => b.aggregate_rating - a.aggregate_rating);
  }

  // 🔹 Envoyer une requête de recherche dans Firebase (exemple : historique de recherche)
  envoyerRecherche(userId: string, recherche: string) {
    const timestamp = new Date().toISOString();
    return this.db.list('requetes_utilisateur').push({ userId, recherche, timestamp });
  }

  // 🔹 Lire les recommandations IA pour un utilisateur donné dans Firebase
  lireRecommandations(userId: string): Observable<any[]> {
    return this.db.list(`resultats_recommandation/${userId}`).valueChanges();
  }
}
