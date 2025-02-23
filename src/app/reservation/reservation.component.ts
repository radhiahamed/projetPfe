import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  restaurantName: string = 'Restaurants';
  tableNumber: string = '0';
  reservationConfirmed: boolean = false;
  
  reservation = {
    name: '',
    date: '',
    time: '',
    people: null,
    phone: 'number'
  };

  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer les paramètres de l'URL
    this.route.paramMap.subscribe(params => {
      this.restaurantName = params.get('restaurantName') || '';
      this.tableNumber = params.get('tableNumber') || '0';
    });
  }

  submitReservation() {
    this.reservationConfirmed = true;
    alert(`Réservation confirmée pour la table ${this.tableNumber} au restaurant ${this.restaurantName}`);
  }
}