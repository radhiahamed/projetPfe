import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-tables',
  templateUrl: './admin-tables.component.html'
})
export class AdminTablesComponent {
  restaurants = [{ name: 'La Mascotte' }, { name: 'Pizza House' }];
  selectedRestaurant = 'La Mascotte';

  tables = [
    { id: 1, restaurant: 'La Mascotte', description: 'Fenêtre' },
    { id: 2, restaurant: 'Pizza House', description: 'Famille' }
  ];

  newTable = { description: '' };

  addTable() {
    const id = Date.now();
    this.tables.push({
      id,
      restaurant: this.selectedRestaurant,
      description: this.newTable.description
    });
    this.newTable = { description: '' };
  }

  getTablesForSelectedRestaurant() {
    return this.tables.filter(t => t.restaurant === this.selectedRestaurant);
  }

  deleteTable(id: number) {
    this.tables = this.tables.filter(t => t.id !== id);
  }
}
