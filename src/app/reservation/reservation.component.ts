import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservationForm!: FormGroup;
  reservations: any[] = [];
  isModalOpen = false;

  
  selectedRestaurantName!: string;
  selectedTableNumber!: string;

  constructor(private fb: FormBuilder, private db: AngularFireDatabase, private route: ActivatedRoute) {}

  ngOnInit() {
    // Récupérer le nom du restaurant + numéro de table depuis l’URL
    this.route.queryParams.subscribe(params => {
      this.selectedRestaurantName = params['restaurant'] || 'Non spécifié';
      this.selectedTableNumber = params['table'] || 'Non spécifié';
      console.log("Restaurant:", this.selectedRestaurantName);
      console.log("Table:", this.selectedTableNumber);
    });

      // Initialiser le formulaire
  this.reservationForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    phone: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    people: ['', [Validators.required, Validators.min(1)]],
    date: ['', Validators.required],
    time: ['', Validators.required]
  });

  this.loadReservations();
}

  loadReservations() {
    this.db.list('reservations').snapshotChanges().subscribe(data => {
      this.reservations = data.map(e => ({
        id: e.payload.key,
        ...e.payload.val() as any
      }));
    });
  }

  submitReservation() {
    if (this.reservationForm.invalid) return;

    const reservationData = {
      name: this.reservationForm.value.name,
      phone: this.reservationForm.value.phone,
      people: this.reservationForm.value.people,
      date: this.reservationForm.value.date,
      time: this.reservationForm.value.time,
      restaurant: this.selectedRestaurantName,  // <== on enregistre le NOM
      table: this.selectedTableNumber           // <== on enregistre la table
    };
    console.log("Envoi de la réservation:", reservationData); // ✅ Vérification console


    this.db.list('reservations').push(reservationData)
    .then(() => {
      alert(' Reservation confirmed!');
      this.reservationForm.reset();
      this.loadReservations();
    })
    .catch(error => {
      console.error('Erreur lors de la réservation:', error);
      alert('❌ Unable to book.');
    });
}

  deleteReservation(id: string) {
    if (confirm('Voulez-vous supprimer cette réservation ?')) {
      this.db.list('reservations').remove(id)
        .then(() => this.loadReservations())
        .catch(err => console.error(err));
    }
  }

  openModal() { this.isModalOpen = true; }
  closeModal() { this.isModalOpen = false; }
}