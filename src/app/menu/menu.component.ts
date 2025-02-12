import { Component } from '@angular/core';
import { DishService } from '../dish.service'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  dishes = [
    {
      name: 'chicken couscous',
      price: '26.00DT',
      bestRestaurant: 'Mechmecha Restaurant',
      imageUrl: 'assets/coscous poulet.png',
      key: 'coscous'
    },
    {
      name: 'Seafood Spaghetti',
      price: '46.00DT',
      bestRestaurant: 'Restaurant Douira',
      imageUrl: 'assets/spaghetti.png',
      key: 'Seafood Spaghetti'
    },
    {
      name: 'Besbes Merguez & Kadid',
      price: '20.00dt',
      bestRestaurant: 'Restaurant Douira',
      imageUrl: 'assets/besbes .png',
      key: 'besbes'
    },
    {
      name: 'Puttanesca',
      price: '15.00DT',
      bestRestaurant: 'Terminal A',
      imageUrl: 'assets/Puttanesca.png',
      key: 'puttanesca'
    },
    {
      name: 'Bolognaise',
      price: '18.00DT',
      bestRestaurant: 'Terminal A',
      imageUrl: 'assets/bolognaise.png',
      key: 'bolognaise'
    },
    {
      name: 'Seafood Pizza',
      price: '33.00DT',
      bestRestaurant: 'Chaaben +',
      imageUrl: 'assets/pizza.png',
      key: 'bolognaise'
    },
    {
      name: 'Sandwich Shawarma',
      price: '11.00DT',
      bestRestaurant: 'TONTON',
      imageUrl: 'assets/sandwitch ton ton.png',
      key: 'sandwich'
    },
    {
      name: 'Burger Picador',
      price: '32.00DT',
      bestRestaurant: 'Le Morillon',
      imageUrl: 'assets/Burger Picador.png',
      key: 'burger'
    },
  ];

  constructor(public dishService: DishService) {}

  openDishDetails(dish: any) {
    this.dishService.selectDish(dish);
  }

  closeModal() {
    this.dishService.selectDish(null); // Fermer le modal en réinitialisant le plat sélectionné
  }
}
