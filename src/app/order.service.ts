import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private cart: any[] = [];
  private totalPrice: number = 0;
  private restaurantName: string | null = null;
  private restaurantLocation: string | null = null;
  addOrder: any;
  private selectedSupplements: any[] = []; 
 

  constructor(private db: AngularFireDatabase) {}
  getSelectedSupplements() {
    return this.selectedSupplements;
  }
  
  setSelectedSupplements(supplements: any[]) {
    this.selectedSupplements = supplements;
  }
  setRestaurantLocation(location: string) {
    this.restaurantLocation = location;
  }

  getRestaurantLocation() {
    return this.restaurantLocation;
  }

  setRestaurantName(name: string) {
    this.restaurantName = name;
  }

  addToOrder(plat: any, restaurantName: string) {
    if (this.restaurantName && this.restaurantName !== restaurantName) {
      alert("⚠️ Vous ne pouvez pas commander des plats de plusieurs restaurants différents.");
      return;
    }

    if (!this.restaurantName) {
      this.restaurantName = restaurantName;
    }

    const platWithRestaurant = { ...plat, restaurant: restaurantName };
    this.cart.push(platWithRestaurant);
    this.calculateTotal();
  }

  clearCart() {
    this.cart = [];
    this.totalPrice = 0;
    this.restaurantName = null;
  }

  getCart() {
    return this.cart;
  }

  getTotal() {
    return this.totalPrice;
  }

  getRestaurantName() {
    return this.restaurantName;
  }

  calculateTotal() {
    this.totalPrice = this.cart.reduce((sum, item) => sum + item.price, 0);
  }
  saveOrder(order: any): Promise<any> {
    // logique pour sauvegarder la commande, par exemple via HTTP
    return new Promise((resolve, reject) => {
      console.log('Order saved:', order);
      resolve(order);
    });
  }
  
  // ✅ Correction : Sauvegarde avec nom du plat comme clé au lieu d'un index
  placeOrder(order: any): Promise<void> {
    if (!this.restaurantName || this.cart.length === 0) {
      return Promise.reject('Commande invalide : aucun restaurant ou plat sélectionné.');
    }

    // Conversion du tableau `this.cart` en objet `{}` avec les noms des plats comme clés
    const formattedItems: any = {};
    this.cart.forEach((plat) => {
      formattedItems[plat.name] = { 
        price: plat.price,
        restaurant: plat.restaurant
      };
    });
     // Calcul du total en fonction du mode de paiement
  let finalTotalPrice = this.getTotal();
  if (order.paymentMethod === 'cash') {
    finalTotalPrice += order.deliveryFees || 0; // ✅ Ajout des frais de livraison si paiement en espèce
  }

    // Création de l'objet de commande à sauvegarder
    const orderData = {
      restaurant: this.restaurantName,
      items: formattedItems,
      totalPrice: finalTotalPrice, 
      deliveryAddress: order.deliveryAddress || '',
      deliveryPhone: order.deliveryPhone || '',
      deliveryFees: order.deliveryFees || 0,
      paymentMethod: order.paymentMethod || 'cash'
    };

    console.log('📌 Commande envoyée à Firebase:', orderData);

    return this.db
      .list('orders')
      .push(orderData)
      .then(() => {
        console.log('✅ Commande enregistrée avec succès dans Firebase !');
        this.clearCart();
      })
      .catch((error) => {
        console.error('❌ Erreur lors de l\'enregistrement de la commande :', error);
        throw error;
      });
  }
}
