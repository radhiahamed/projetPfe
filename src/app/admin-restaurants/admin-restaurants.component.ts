import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-restaurants',
  templateUrl: './admin-restaurants.component.html'
})
export class AdminRestaurantsComponent {
   restaurant = {
    name: '',
    cuisine: '',
    price: null
  };

  // Liste des restaurants avec les propriétés 'name', 'cuisine', 'price'
  restaurants = [
    { id: 1, name: 'Restaurant 1', cuisine: 'Cuisine 1', price: 20 },
    { id: 2, name: 'Restaurant 2', cuisine: 'Cuisine 2', price: 25 }
  ];

  isEditing = false;

  // Soumission du formulaire
  onSubmit() {
    if (this.isEditing) {
      // Logique de modification
      console.log('Modifier Restaurant', this.restaurant);
    } else {
      // Logique d'ajout
      console.log('Ajouter Restaurant', this.restaurant);
    }
    this.resetForm();
  }

  // Modifier un restaurant
  editRestaurant(restaurant: any) {
    this.isEditing = true;
    this.restaurant = { ...restaurant }; // Remplir le formulaire avec les données du restaurant
  }

  // Supprimer un restaurant
  deleteRestaurant(id: number) {
    this.restaurants = this.restaurants.filter(r => r.id !== id);
  }

  // Réinitialiser le formulaire
  resetForm() {
    this.restaurant = { name: '', cuisine: '', price: null };
    this.isEditing = false;
  }
}