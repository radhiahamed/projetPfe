import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-reservations',
  templateUrl: './admin-reservations.component.html'
})
export class AdminReservationsComponent {
  reservations = [
    { clientName: 'Ali', restaurant: 'La Mascotte', table: '1', date: '2025-05-15' },
    { clientName: 'Sara', restaurant: 'Pizza House', table: '2', date: '2025-05-16' }
  ];
editReservation: any;
cancelReservation: any;
exportToExcel: any;
dateRange: any;
addReservation: any;
deleteReservation: any;
confirmReservation: any;
}
