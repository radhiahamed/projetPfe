import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restaurants = [
    { id: 1, name: 'La Mascotte', city: 'Sfax', image: 'assets/mascotte.png', description: 'Seafood and traditional French cuisine.', address: '1-361 Rte du Kaïd Mhamed, Sfax 3039', phone: '26 015 115', rating: 4 },
    { id: 2, name: 'TONTON', city: 'Sfax', image: 'assets/ton ton.png', description: 'Italian, European cuisine.', address: 'City Centre Building, Rue Majida Boulila', phone: '26 719 300', rating: 4 },
    { id: 3, name: 'El Kolla', city: 'Sfax', image: 'assets/el kolla.png', description: 'Fish and seafood in a warm atmosphere.', address: 'km3 Rte Soukra, Sfax 3000', phone: '55 185 581', rating: 4 },
    { id: 4, name: 'La Raclette', city: 'Tunis', image: 'assets/la raclette.jpg', description: 'Swiss and European cuisine.', address: 'Gremda km 4.5, Sfax', phone: '93 808 809', rating: 4 },
    { id: 5, name: 'Trocadero Sfax', city: 'Sfax', image: 'assets/trocadero.png', description: 'Restaurant and lounge café.', address: 'Route Lafrane km 4, Sfax', phone: '29 160 341', rating: 4 },
    { id: 6, name: 'Pomme de Mer', city: 'Soukra', image: 'assets/Pomme-de-mer.jpg', description: 'Fish and seafood.', address: 'Route Kaid Mohamad km2, Sfax 3002', phone: '21 297 910', rating: 4 },
    { id: 7, name: 'La Voile Blanche', city: 'Soukra', image: 'assets/voile blanche.jpg', description: 'Fish and seafood.', address: 'Route Teniour, Sfax', phone: '22 287 799', rating: 4 },
    { id: 8, name: 'Le Raffiné', city: 'Tunis', image: 'assets/leraffine.jpg', description: 'French and Italian cuisine.', address: 'Rte Gremda, Sfax 3000', phone: '20 302 414', rating: 4 },
  ];

  constructor() { }

  getRestaurants() {
    return this.restaurants;
  }
}
