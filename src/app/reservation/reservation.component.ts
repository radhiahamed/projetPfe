import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservation = {
    name: '',
    date: '',
    time: '',
    people: null,
    phone:''
  };
  submitReservation() {
    console.log('Réservation confirmée:', this.reservation);
    alert(`Reservation for ${this.reservation.name} on ${this.reservation.date} at ${this.reservation.time}`);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
