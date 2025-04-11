import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  // Liste des restaurants avec leurs plats
  restaurants = [
    {
      name: 'Tonton',
      plats: [
        { name: 'Chicken Couscous', price: 26, image: 'assets/coscous poulet.png' },
        { name: 'Seafood Spaghetti', price: 46, image: 'assets/spaghetti.png' },
        { name: 'Besbes Merguez & Kadid', price: 20, image: 'assets/besbes .png' },
        { name: 'Puttanesca', price: 15, image: 'assets/Puttanesca.png' },
        { name: 'Bolognaise', price: 18, image: 'assets/bolognaise.png' },
        { name: 'Seafood Pizza', price: 33, image: 'assets/pizza.png' },
      ],
    },
    {
      name: 'La Mascotte',
      plats: [
        { name: 'Sandwich Shawarma', price: 11, image: 'assets/sandwitch ton ton.png' },
        { name: 'Burger Picador', price: 32, image: 'assets/Burger Picador.png' },
        { name: 'Pasta crevette', price: 32, image: 'assets/image10.jpg' },
        { name: 'Sandwich mergaz', price: 32, image: 'assets/sandwich.png' },
        { name: 'Burger pané', price: 32, image: 'assets/burger pané.png' },
      ],
    },
    {
      name: 'El Kolla',
      plats: [
        { name: 'Chicken Couscous', price: 26, image: 'assets/coscous poulet.png' },
        { name: 'Seafood Spaghetti', price: 46, image: 'assets/spaghetti.png' },
        { name: 'Besbes Merguez & Kadid', price: 20, image: 'assets/besbes .png' },
        { name: 'Puttanesca', price: 15, image: 'assets/Puttanesca.png' },
        { name: 'Bolognaise', price: 18, image: 'assets/bolognaise.png' },
      ],
    },
    {
      name: 'Le Raffiné',
      plats: [
        { name: 'Seafood Pizza', price: 33, image: 'assets/pizza.png' },
        { name: 'Sandwich Shawarma', price: 11, image: 'assets/sandwitch ton ton.png' },
        { name: 'Burger Picador', price: 32, image: 'assets/Burger Picador.png' },
        { name: 'Pasta crevette', price: 32, image: 'assets/image10.jpg' },
        { name: 'Sandwich mergaz', price: 32, image: 'assets/sandwich.png' },
        { name: 'Burger pané', price: 32, image: 'assets/burger pané.png' },
      ],
    },
  ];

  cart = this.orderService.getCart();

  constructor(private orderService: OrderService, private router: Router) {}

  // Ajouter un plat au panier
  addToOrder(plat: any, restaurantName: string) {
    this.orderService.addToOrder(plat, restaurantName);
    alert(`🍽️ Plat "${plat.name}" ajouté au panier depuis "${restaurantName}" !`);
  }

  // Annuler la commande
  cancelOrder() {
    if (confirm("❌ Voulez-vous vraiment annuler votre commande ?")) {
      this.orderService.clearCart();
      alert("Commande annulée !");
    }
  }

  // Obtenir le total du panier
  getTotal() {
    return this.orderService.getTotal();
  }

  // Valider la commande
  validateOrder() {
    if (this.cart.length === 0) {
      alert("🚫 Votre panier est vide !");
      return;
    }
    this.router.navigate(['/order']); // Redirection vers la page de commande
  }
}