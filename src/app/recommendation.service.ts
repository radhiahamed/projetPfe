// recommendation.service.ts
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  constructor(private db: AngularFireDatabase) {}

  getRecommendations(): Observable<any[]> {
    return this.db.list('/angular_recommendations')
      .valueChanges()
      .pipe(
        map((batches: any[]) => {
          // Fusionne tous les lots et aplatit le tableau
          return batches.flat();
        })
      );
  }
}