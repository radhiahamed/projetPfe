import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent {
  restaurantId!: string;

  restaurants = [
    { id: 1, name: 'La Mascotte', image: 'assets/mascotte.png', description: 'Seafood and traditional French cuisine.', address: ' Rte du Kaïd Mhamed, Sfax ', phone: '26 015 115', rating: 4 },
    { id: 2, name: 'TONTON', image: 'assets/ton ton.png', description: 'Italian, European cuisine.', address: 'City Centre Building, Rue Majida Boulila', phone: '26 719 300', rating: 4 },
    { id: 3, name: 'El Kolla', image: 'assets/el kolla.png', description: 'Fish and seafood in a warm atmosphere.', address: 'km3 Rte Soukra, Sfax 3000', phone: '55 185 581', rating: 4 },
    { id: 4, name: 'La Raclette', image: 'assets/la raclette.jpg', description: 'Swiss and European cuisine.', address: 'Gremda km 4.5, Sfax', phone: '93 808 809', rating: 4 },
    { id: 5, name: 'Trocadero Sfax', image: 'assets/trocadero.png', description: 'Restaurant and lounge café.', address: 'Route Lafrane km 4, Sfax', phone: '29 160 341', rating: 4 },
    { id: 6, name: 'Pomme de Mer', image: 'assets/Pomme-de-mer.jpg', description: 'Fish and seafood.', address: 'Route Kaid Mohamad km2, Sfax 3002', phone: '21 297 910', rating: 4 },
    { id: 7, name: 'La Voile Blanche', image: 'assets/voile blanche.jpg', description: 'Fish and seafood.', address: 'Route Teniour, Sfax', phone: '22 287 799', rating: 4 },
    { id: 8, name: 'Le Raffiné', image: 'assets/leraffine.jpg', description: 'French and Italian cuisine.', address: 'Rte Gremda, Sfax 3000', phone: '20 302 414', rating: 4 },
  ];

  displayedRestaurants = this.restaurants.length; // Pour afficher tous les restaurants
  restaurant: any; // Propriété pour stocker le restaurant sélectionné
isSearchMode: any;
filteredRestaurants = this.restaurants;


  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const restaurantName = params['name'];
      
      if (restaurantName) {
        // Si un nom de restaurant est spécifié dans l'URL, filtrer pour n'afficher que ce restaurant
        this.restaurant = this.restaurants.find(r => r.name === restaurantName);
        this.displayedRestaurants = this.restaurant ? 1 : 0;
      } else {
        // Sinon, afficher tous les restaurants
        this.displayedRestaurants = this.restaurants.length;
      }
    });
  }
  showAllRestaurants() {
    // Réinitialiser pour afficher tous les restaurants
    this.restaurant = null;
    this.displayedRestaurants = this.restaurants.length;
    
    // Optionnel: Retirer le paramètre de l'URL
    this.router.navigate(['/restaurant']);
  }
  // 🔹 Rediriger vers la page des tables
  goToTables(restaurantId: number, restaurantName: string) {
    console.log('Navigation vers tables:', restaurantId, restaurantName); // Debug
    this.router.navigate(['/tables'], {
      queryParams: { restaurantId: restaurantId, restaurant: restaurantName }
    });
  }

  // 🔹 Afficher les étoiles selon la note du restaurant
  getStars(rating: number): string {
    const fullStar = '⭐'.repeat(Math.floor(rating));
    const halfStar = rating % 1 >= 0.5 ? '✨' : ''; // Demi-étoile si besoin
    return fullStar + halfStar;
  }
  
}