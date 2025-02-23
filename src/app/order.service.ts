import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  selectedItems: any;
  constructor() {}
  addToOrder(item: any) {
    this.selectedItems.push(item);
  }

  getOrderItems() {
    return this.selectedItems;
  }

  clearOrder() {
    this.selectedItems = [];
  }


  // ✅ Simulation de commande (peut être connecté à Firebase plus tard)
  placeOrder(order: any): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log('📦 Order in progress :', order);
      setTimeout(() => {
        resolve('Order successfully validated ✅');
      }, 2000); // Simule un délai de 2 secondes
    });
  }
}
