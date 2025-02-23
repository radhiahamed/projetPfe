import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order = {
    deliveryAddress: '',
    paymentMethod: 'card',  // Mode de paiement par défaut
    deliveryFees: 0,  // Par défaut, livraison gratuite
    totalPrice: 50  // Exemple de prix initial de la commande
  };

  isLoading = false;  // Pour afficher un indicateur de chargement

  constructor(private orderService: OrderService, ) {}

  ngOnInit(): void {
    this.updateDeliveryFees(); // Mise à jour au chargement
  }

  // ✅ Met à jour les frais de livraison en fonction du mode de paiement
  updateDeliveryFees() {
    if (this.order.paymentMethod === 'card') {
      this.order.deliveryFees = 0;  // Livraison gratuite
    } else {
      this.order.deliveryFees = 5;  // Frais supplémentaires pour paiement en espèces
    }
  }

  // ✅ Soumission de la commande
  submitOrder() {
    this.order.totalPrice += this.order.deliveryFees; // Ajouter les frais de livraison au total
    this.isLoading = true;  // Activer l'indicateur de chargement

    this.orderService.placeOrder(this.order)
      .then(() => {
        this.isLoading = false;
        alert('✅ Order confirmed successfully!');
      })
      .catch((error: any) => {
        this.isLoading = false;
        console.error('Error while ordering:', error);
      });
  }
}
