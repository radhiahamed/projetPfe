import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { MapsService } from '../maps.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  restaurantName: string | null = null;
  restaurantLocation: string = '';

  order: {
    supplements: any;
    deliveryAddress: string;
    deliveryPhone: string;
    paymentMethod: string;
    deliveryFees: number;
    totalPrice: number;
    items: any[];
    cardNumber?: string;
    expiryDate?: string;
    cvv?: string;
    restaurant?: string;
  } = {
    deliveryAddress: '',
    deliveryPhone: '',
    paymentMethod: 'card',
    deliveryFees: 0,
    totalPrice: 0,
    items: [],
    supplements: [], // <<< AJOUTE CETTE LIGNE

  };

  isLoading = false;
  cart: any[] = [];
cancelOrder: any;
  supplements: any;
  selectedSupplements: any;

  constructor(private orderService: OrderService, private mapsService: MapsService) {}

  ngOnInit(): void {
    this.supplements = this.orderService.getSelectedSupplements(); // <<< AJOUTE ÇA
    this.selectedSupplements = this.supplements;
    
  this.cart = this.orderService.getCart(); // Récupérer le panier
  this.order.totalPrice = this.orderService.getTotal(); // Récupérer le total
  this.restaurantName = this.orderService.getRestaurantName(); // Récupérer le nom du restaurant

  const restaurantLocation = this.orderService.getRestaurantLocation();
  if (restaurantLocation) {
    this.restaurantLocation = restaurantLocation;
  } else {
    console.warn('Aucune localisation de restaurant trouvée.');
  }

  this.updateDeliveryFees();
}

  /**
   * Met à jour les frais de livraison en fonction de la méthode de paiement et de la distance.
   */
  updateDeliveryFees(): void {
    if (this.order.paymentMethod === 'card') {
      this.order.deliveryFees = 0;
    } else {
      if (!this.restaurantLocation || !this.order.deliveryAddress) {
        console.warn('Adresse de livraison ou localisation du restaurant manquante.');
        this.order.deliveryFees = 5; // Frais fixes en cas d'erreur
        return;
      }

      this.mapsService
        .getDistance(this.restaurantLocation, this.order.deliveryAddress)
        .then((distance: number) => {
          this.order.deliveryFees = Math.max(distance * 1, 5); // Minimum 5 TND
        })
        .catch((error: any) => {
          console.error('Erreur lors du calcul de la distance :', error);
          this.order.deliveryFees = 5; // Frais fixes en cas d'erreur
        });
    }
  }
  validateOrder() {
    if (!this.order.deliveryAddress || !this.order.deliveryPhone) {
      alert('Veuillez remplir toutes les informations de livraison.');
      return;
    }
  
    this.isLoading = true;
  
    // Ajoute les suppléments dans la commande avant d'envoyer
    this.order.restaurant = this.restaurantName ?? '';
    this.order.supplements = this.selectedSupplements; // <<< AJOUT IMPORTANT 🔥
  
    this.orderService.saveOrder(this.order).then(() => {
      this.isLoading = false;
      alert('Commande enregistrée avec succès!');
      this.orderService.clearCart();
    }).catch((error: any) => {
      this.isLoading = false;
      console.error('Erreur lors de l\'enregistrement de la commande :', error);
    });
  }
  
  /**
   * Soumet la commande.
   */
  submitOrder(): void {
    if (!this.order.deliveryAddress || !this.order.deliveryPhone) {
      alert('Veuillez remplir toutes les informations de livraison !');
      return;
    }
  
    if (this.order.paymentMethod === 'card') {
      if (!this.order.cardNumber || !this.order.expiryDate || !this.order.cvv) {
        alert('Veuillez entrer les informations de votre carte bancaire.');
        return;
      }
    }
  
    // Ajouter les plats et le nom du restaurant à la commande
    this.order.items = this.cart; // Inclure les plats sélectionnés
    this.order.restaurant = this.restaurantName || 'Restaurant inconnu'; // Inclure le nom du restaurant
  
    this.order.totalPrice += this.order.deliveryFees;
    this.isLoading = true;
  
    this.orderService
      .placeOrder(this.order)
      .then(() => {
        this.isLoading = false;
        alert('✅ Commande enregistrée avec succès dans Firebase !');
        this.orderService.clearCart();
      })
      .catch((error: any) => {
        this.isLoading = false;
        console.error('Erreur lors de la commande :', error);
        alert('Une erreur est survenue lors de l\'enregistrement de la commande.');
      });
  }

  /**
   * Traite le paiement par carte.
   */
  processCardPayment(): void {
    console.log('Processing payment with card:', this.order.cardNumber);
  }
}