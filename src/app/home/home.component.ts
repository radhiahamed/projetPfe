// src/app/home/home.component.ts
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { JsonDataService } from '../json-data-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  showDropdown = false;
  selectedCity: string = 'Sfax';
  cities: string[] = ['Beb bhar', 'Teniour', 'Gremda', 'EL Ain', 'Lafrane', 'Soukra', 'Kaid Mhamed', 'Bouzayen'];
  searchQuery: string = '';
  recommendations: any[] = [];  // Pour stocker les recommandations

  restaurants = [
    { id: 1, name: 'La Mascotte' },
    { id: 2, name: 'TONTON' },
    { id: 3, name: 'El Kolla' },
    { id: 4, name: 'La Raclette' },
    { id: 5, name: 'Trocadero Sfax' },
    { id: 6, name: 'Pomme de Mer' },
    { id: 7, name: 'La Voile Blanche' },
    { id: 8, name: 'Le Raffiné' },
  ];

  constructor(private router: Router, private recommendationService: JsonDataService) {}

  showOrderDropdown = false;

  toggleOrderDropdown() {
    this.showOrderDropdown = !this.showOrderDropdown;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.order-link') && !target.closest('.dropdown-content')) {
      this.showOrderDropdown = false;
    }
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectCity(city: string) {
    localStorage.setItem('selectedCity', city);
    this.router.navigate(['/map']);
  }

  detectLocation() {
    this.selectedCity = 'Autour de moi';
    this.showDropdown = false;
  }

  goToMap() {
    this.router.navigate(['/map'], { queryParams: { city: this.selectedCity } });
  }

  // Fonction de recherche avec intégration de l'IA et envoi de la recherche dans Firebase
  searchRestaurants() {
    if (this.searchQuery.trim() === '') {
      this.router.navigate(['/restaurant']);
      return;
    }

    // Envoyer la recherche à Firebase
    this.recommendationService.envoyerRecherche('user123', this.searchQuery).then(() => {
      
      // Après avoir envoyé la recherche, récupérer les recommandations
      this.recommendationService.lireRecommandations('user123').subscribe(data => {
        this.recommendations = data;  // Stocker les recommandations

        if (this.recommendations.length > 0) {
          // Afficher les recommandations (par exemple, dans une alerte ou une autre vue)
          alert('Voici les recommandations: ' + JSON.stringify(this.recommendations));
        } else {
          alert('No recommendations available for this term.');
        }
      });
    });

    // Recherche d'un restaurant dans la liste locale si pas de recommandations IA
    const foundRestaurant = this.restaurants.find(r => 
      r.name.toLowerCase().includes(this.searchQuery.toLowerCase().trim())
    );
  
    if (foundRestaurant) {
      // Naviguer vers la page du restaurant spécifique
      this.router.navigate(['/restaurant', foundRestaurant.name]);
    } else {
      alert('No restaurant found. Try another name.');
    }
  }
}
