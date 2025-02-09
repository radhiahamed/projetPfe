import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'RestaurantReservation';
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyAEqObMgYa5BsV2A5gIokjmb2pfYzVaOn4",
      authDomain: "angularproject-14f34.firebaseapp.com",
      projectId: "angularproject-14f34",
      storageBucket: "angularproject-14f34.firebasestorage.app",
      messagingSenderId: "278109562915",
      appId: "1:278109562915:web:e12918c8f5712c49af6996",
      measurementId: "G-RLEPPQ7WYS"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
