import { Injectable } from '@angular/core';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  constructor() {}

  
    getDistance(origin: string, destination: string): Promise<number> {
      return new Promise((resolve, reject) => {
        if (!origin || !destination) {
          reject('Origine ou destination manquante');
          return;
        }
  
        const service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
          {
            origins: [origin],
            destinations: [destination],
            travelMode: google.maps.TravelMode.DRIVING
          },
          (response: any, status: string) => {
            if (status !== 'OK') {
              reject('Erreur Google Maps: ' + status);
              return;
            }
  
            const distance = response.rows[0].elements[0].distance?.value ?? null;
            if (distance !== null) {
              resolve(distance / 1000); // Convertir en km
            } else {
              reject('Distance introuvable');
            }
          }
        );
      });
    }
  }
