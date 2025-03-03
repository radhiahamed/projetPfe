import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
goToMap() {
throw new Error('Method not implemented.');
}
  showDropdown = false;
  selectedCity: string = 'Sfax';
  cities: string[] = ['Beb bhar', 'Teniour', 'Gremda', 'EL Ain', 'Lafrane', 'Soukra', 'Kaid Mhamed', 'Bouzayen'];
  searchQuery: string = '';

  // Liste des restaurants
  restaurants = [
    { id: 1, name: 'La Mascotte' },
    { id: 2, name: 'TONTON' },
    { id: 3, name: 'El Kolla' },
    { id: 4, name: 'La Raclette' },
    { id: 5, name: 'Trocadero Sfax' },
    { id: 6, name: 'Pomme de Mer' },
    { id: 7, name: 'La Voile Blanche' },
    { id: 8, name: 'Le Raffiné' },
  ];

  constructor(private router: Router) {}

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectCity(city: string) {
    this.selectedCity = city;
    this.showDropdown = false;
  }

  detectLocation() {
    this.selectedCity = 'Autour de moi';
    this.showDropdown = false;
  }

  // 🔥 Correction de la fonction de recherche
  searchRestaurants() {
    console.log('Recherche de restaurants pour :', this.searchQuery, 'dans', this.selectedCity);

    // Vérification du restaurant
    const foundRestaurant = this.restaurants.find(
      r => r.name.toLowerCase().trim() === this.searchQuery.toLowerCase().trim()
    );

    if (foundRestaurant) {
      this.router.navigate(['/restaurant', foundRestaurant.name]);
    } else {
      alert('Restaurant non trouvé. Essayez un autre nom.');
    }
  }
}
