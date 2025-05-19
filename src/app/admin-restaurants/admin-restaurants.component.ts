import { Component } from '@angular/core';

interface Restaurant {
  id: number;
  nom: string;
  location: string;
  typeCuisine: string;
}

@Component({
  selector: 'app-admin-restaurants',
  templateUrl: './admin-restaurants.component.html',
  styleUrls: ['./admin-restaurants.component.css']  // ✅ ligne correcte
})
export class AdminRestaurantsComponent {
   restaurants: Restaurant[] = [
    { id: 1, nom: 'La Mascotte', location: 'Sfax', typeCuisine: 'Tunisian' },
    { id: 2, nom: 'Trocadero', location: 'Sfax', typeCuisine: 'Italian' },
    { id: 3, nom: 'TONTON', location: 'Sfax', typeCuisine: 'Italian' }
  ];

  private nextId = this.restaurants.length + 1;

  onAddRestaurant() {
    const newRestaurant: Restaurant = {
      id: this.nextId++,
      nom: 'New Restaurant',
      location: 'City',
      typeCuisine: 'Type'
    };
    this.restaurants.push(newRestaurant);
  }

  onEditRestaurant(restaurant: Restaurant) {
    const newName = prompt('Change the name of the restaurant:', restaurant.nom);
    if (newName && newName.trim() !== '') {
      restaurant.nom = newName.trim();
    }
  }

  onDeleteRestaurant(restaurant: Restaurant) {
    if (confirm(`Please visit the restaurant above "${restaurant.nom}" ?`)) {
      this.restaurants = this.restaurants.filter(r => r.id !== restaurant.id);
    }
  }
}