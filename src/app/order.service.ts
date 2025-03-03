import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private cart: any[] = [];
  private totalPrice: number = 0;

  constructor(private firestore: AngularFirestore) {}

  addToOrder(plat: any) {
    this.cart.push(plat);
    this.calculateTotal();
  }

  clearCart() {
    this.cart = [];
    this.totalPrice = 0;
  }

  getCart() {
    return this.cart;
  }

  getTotal() {
    return this.totalPrice;
  }

  calculateTotal() {
    this.totalPrice = this.cart.reduce((sum, item) => sum + item.price, 0);
  }

  placeOrder(orderData: any) {
    return this.firestore.collection('orders').add(orderData);
  }
}