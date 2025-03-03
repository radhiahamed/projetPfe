import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order = {
    deliveryAddress: '',
    deliveryPhone: '',
    paymentMethod: 'card',  // Mode de paiement par défaut
    deliveryFees: 0,  // Par défaut, livraison gratuite
    totalPrice: 0,  // Exemple de prix initial de la commande
    items: [],
    cardNumber: '',   // Ajout des informations de la carte
    expiryDate: '',   // Date d'expiration de la carte
    cvv: ''           // Code de sécurité CVV

  };

  isLoading = false;
  cart: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.cart = this.orderService.getCart();
    this.order.totalPrice = this.orderService.getTotal();
    this.updateDeliveryFees();
  }

  updateDeliveryFees() {
    this.order.deliveryFees = this.order.paymentMethod === 'card' ? 0 : 5;
  }

  submitOrder() {
    if (!this.order.deliveryAddress || !this.order.deliveryPhone) {
      alert('Veuillez remplir toutes les informations !');
      return;
    }
     // Validation si mode de paiement est par carte
     if (this.order.paymentMethod === 'card') {
      if (!this.order.cardNumber || !this.order.expiryDate || !this.order.cvv) {
        alert('Veuillez entrer les informations de votre carte bancaire.');
        return;
      }

      // Ici, tu intégrerais le service de paiement sécurisé comme Stripe
      this.processCardPayment();
    }

    this.order.totalPrice += this.order.deliveryFees;
    this.isLoading = true;

    this.orderService.placeOrder(this.order)
      .then(() => {
        this.isLoading = false;
        alert('✅ Commande confirmée avec succès !');
        this.orderService.clearCart();
      })
      .catch((error: any) => {
        this.isLoading = false;
        console.error('Erreur lors de la commande :', error);
      });
  }
  // Méthode pour traiter le paiement par carte bancaire
  processCardPayment() {
    // Logique pour envoyer les détails de la carte à Stripe ou un autre service
    console.log('Processing payment with card:', this.order.cardNumber);
    // Intégrer ici l'API de Stripe ou autre service
  }
}