import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-restaurants',
  templateUrl: './admin-restaurants.component.html'
})
export class AdminRestaurantsComponent {
  restaurants = [
    { id: 1, name: 'La Mascotte', location: 'Sfax' },
    { id: 2, name: 'Pizza House', location: 'Tunis' }
  ];
  newRestaurant = { name: '', location: '' };

  addRestaurant() {
    const id = Date.now();
    this.restaurants.push({ id, ...this.newRestaurant });
    this.newRestaurant = { name: '', location: '' };
  }

  deleteRestaurant(id: number) {
    this.restaurants = this.restaurants.filter(r => r.id !== id);
  }

  editRestaurant(resto: any) {
    this.newRestaurant = { ...resto };
  }
}
