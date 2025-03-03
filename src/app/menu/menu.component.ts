import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  plats = [
    { name: 'Chicken Couscous', price: 26, image: 'assets/coscous poulet.png' },
    { name: 'Seafood Spaghetti', price: 46, image: 'assets/spaghetti.png' },
    { name: 'Besbes Merguez & Kadid', price: 20, image: 'assets/besbes .png' },
    { name: 'Puttanesca', price: 15, image: 'assets/Puttanesca.png' },
    { name: 'Bolognaise', price: 18, image: 'assets/bolognaise.png' },
    { name: 'Seafood Pizza', price: 33, image: 'assets/pizza.png' },
    { name: 'Sandwich Shawarma', price: 11, image: 'assets/sandwitch ton ton.png' },
    { name: 'Burger Picador', price: 32, image: 'assets/Burger Picador.png' },
    { name: 'Pasta crevette', price: 32, image: 'assets/image10.jpg' },
    { name: 'Sandwich mergaz', price: 32, image: 'assets/sandwich.png' },
    { name: 'Burger pané', price: 32, image: 'assets/burger pané.png' }
  ];
  cart = this.orderService.getCart(); 

  constructor(private orderService: OrderService, private router: Router) {}

  addToOrder(plat: any) {
    this.orderService.addToOrder(plat);
    alert("🍽️ Plat ajouté au panier !");
  }

  cancelOrder() {
    if (confirm("❌ Voulez-vous vraiment annuler votre commande ?")) {
      this.orderService.clearCart();
      alert("Commande annulée !");
    }
  }

  getTotal() {
    return this.orderService.getTotal();
  }

  validateOrder() {
    if (this.cart.length === 0) {
      alert("🚫 Votre panier est vide !");
      return;
    }
  
    this.router.navigate(['/order']); // Redirection vers la page de commande
  }
}