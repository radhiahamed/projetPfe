import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

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

  // Liste des restaurants
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

  constructor(private router: Router) {}
// Dans votre composant
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
  // 🎯 Ajout de la navigation vers la page Map
  goToMap() {
    this.router.navigate(['/map'], { queryParams: { city: this.selectedCity } });
  }
  // 🔥 Correction de la fonction de recherche
  searchRestaurants() {
    if (this.searchQuery.trim() === '') {
      this.router.navigate(['/restaurant']);
      return;
    }
  
    const foundRestaurant = this.restaurants.find(r => 
      r.name.toLowerCase().includes(this.searchQuery.toLowerCase().trim())
    );
  
    if (foundRestaurant) {
      // Naviguer vers la page du restaurant spécifique
      this.router.navigate(['/restaurant', foundRestaurant.name]);
    } else {
      alert('Aucun restaurant trouvé. Essayez un autre nom.');
    }
  }
}
