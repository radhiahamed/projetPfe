// src/app/chat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';

  private apiKey = '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';

  constructor(private http: HttpClient) {}

  sendMessage(userMessage: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    });

    const body = {
      model: "gpt-3.5-turbo",  // ✅ modèle valide
      messages: [
        { role: "system", content: "Tu es un assistant pour un site de réservation de restaurant et de commande en ligne. Réponds en français ou en anglais." },
        { role: "user", content: userMessage }
      ]
    };

    return this.http.post<any>(this.apiUrl, body, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erreur API:', error);
        let errorMsg = 'Erreur inconnue';
        if (error.status === 401) {
          errorMsg = 'Clé API invalide';
        } else if (error.status === 429) {
          errorMsg = 'Quota dépassé ou trop de requêtes';
        }
        return throwError(() => new Error(errorMsg));
      })
    );
  }
}
