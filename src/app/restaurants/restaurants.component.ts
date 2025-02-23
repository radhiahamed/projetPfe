import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent {

  restaurants = [
    { id: 1, name: 'La Mascotte', image: 'assets/mascotte.png', description: 'Seafood and traditional French cuisine.', address: '1-361 Rte du Kaïd Mhamed, Sfax 3039', phone: '26 015 115', rating: 4 },
    { id: 2, name: 'TONTON', image: 'assets/ton ton.png', description: 'Italian, European cuisine.', address: 'City Centre Building, Rue Majida Boulila', phone: '26 719 300', rating: 4 },
    { id: 3, name: 'El Kolla', image: 'assets/el kolla.png', description: 'Fish and seafood in a warm atmosphere.', address: 'km3 Rte Soukra, Sfax 3000', phone: '55 185 581', rating: 4 },
    { id: 4, name: 'La Raclette', image: 'assets/la raclette.jpg', description: 'Swiss and European cuisine.', address: 'Gremda km 4.5, Sfax', phone: '93 808 809', rating: 4 },
    { id: 5, name: 'Trocadero Sfax', image: 'assets/trocadero.png', description: 'Restaurant and lounge café.', address: 'Route Lafrane km 4, Sfax', phone: '29 160 341', rating: 4 },
    { id: 6, name: 'Pomme de Mer', image: 'assets/Pomme-de-mer.jpg', description: 'Fish and seafood.', address: 'Route Kaid Mohamad km2, Sfax 3002', phone: '21 297 910', rating: 4 },
    { id: 7, name: 'La Voile Blanche', image: 'assets/voile blanche.jpg', description: 'Fish and seafood.', address: 'Route Teniour, Sfax', phone: '22 287 799', rating: 4 },
    { id: 8, name: 'Le Raffiné', image: 'assets/leraffine.jpg', description: 'French and Italian cuisine.', address: 'Rte Gremda, Sfax 3000', phone: '20 302 414', rating: 4 },
  ];

  displayedRestaurants = 8; // Nombre de restaurants affichés au départ

  showMore() {
    this.displayedRestaurants += 8; // Augmente le nombre affiché
  }

  getStars(rating: number | undefined): string {
    if (rating === undefined) {
      return '☆☆☆☆☆';  // Valeur par défaut si rating est undefined
    }
    const fullStars = '⭐'.repeat(Math.floor(rating));
    const halfStar = rating % 1 !== 0 ? '⭐' : '';
    const emptyStars = '☆'.repeat(5 - Math.ceil(rating));
    return fullStars + halfStar + emptyStars;
  }

  constructor(private router: Router) {}
  goToTables(restaurantName: String) {
    this.router.navigate(['/tables', restaurantName]); 
  }
}
