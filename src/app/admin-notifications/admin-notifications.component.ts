import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-notifications',
  templateUrl: './admin-notifications.component.html',
  styleUrls: ['./admin-notifications.component.css']
})
export class AdminNotificationsComponent implements OnInit {
 ngOnInit(): void {
   throw new Error('Method not implemented.');
 }
 notifications = [
    { message: 'Nouvelle réservation reçue.', date: new Date(), type: 'success' },
    { message: 'Table annulée par un client.', date: new Date(), type: 'warning' },
    { message: 'Erreur de paiement détectée.', date: new Date(), type: 'error' }
  ];
}
