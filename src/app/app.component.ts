import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { RestaurantService } from './restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RestaurantReservation';

  // Configuration Firebase
  firebaseConfig = {
    apiKey: "AIzaSyAEqObMgYa5BsV2A5gIokjmb2pfYzVaOn4",
    authDomain: "angularproject-14f34.firebaseapp.com",
    databaseURL: "https://angularproject-14f34-default-rtdb.firebaseio.com", // Ajout essentiel
    projectId: "angularproject-14f34",
    storageBucket: "angularproject-14f34.appspot.com", // Correction du nom
    messagingSenderId: "278109562915",
    appId: "1:278109562915:web:e12918c8f5712c49af6996",
    measurementId: "G-RLEPPQ7WYS"
  };

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    // Initialisation Firebase
    const app = initializeApp(this.firebaseConfig);
    const database = getDatabase(app);
    
    // Test de connexion
    this.restaurantService.debugConnection();
  }
}