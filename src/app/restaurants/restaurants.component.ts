import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  
 showHoraires: boolean = false; 
  horaires = { ouverture: "10:00", fermeture: "23:30" }; // Heures d'ouverture
  estOuvert: boolean = false;
  private intervalId: any;

  constructor() {}

  ngOnInit(): void {
    this.verifierOuverture(); // Vérification initiale
    this.intervalId = setInterval(() => this.verifierOuverture(), 60000); // Vérifier toutes les 60 sec
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId); // Nettoyer l'intervalle quand le composant est détruit
  }

  toggleHoraires() {
    this.showHoraires = !this.showHoraires;
  }

  verifierOuverture() {
    const now = new Date();
    const heureActuelle = now.getHours() * 60 + now.getMinutes();
    
    const [hOuverture, mOuverture] = this.horaires.ouverture.split(':').map(Number);
    const [hFermeture, mFermeture] = this.horaires.fermeture.split(':').map(Number);

    const ouvertureMin = hOuverture * 60 + mOuverture;
    const fermetureMin = hFermeture * 60 + mFermeture;

    this.estOuvert = heureActuelle >= ouvertureMin && heureActuelle < fermetureMin;

    
  }
}
