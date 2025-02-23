import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-location-selector',
  templateUrl: './location-selector.component.html',
  styleUrls: ['./location-selector.component.css']
})
export class LocationSelectorComponent {
  @Output() locationSelected = new EventEmitter<string>();

  searchCity: string = 'Sfax'; // Valeur par défaut
  showDropdown: boolean = false;
  cities: string[] = ['Beb bhar', 'Teniour', 'Gremda', 'EL Ain', 'Lafrane', 'Soukra', 'Kaid Mhamed', 'Bouzayen', ''];
  filteredCities: string[] = [];

  constructor() {
    this.filteredCities = this.cities;
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  filterCities(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredCities = this.cities.filter(city => 
      city.toLowerCase().includes(query)
    );
  }

  selectCity(city: string) {
    this.searchCity = city;
    this.showDropdown = false;
    this.locationSelected.emit(city); // Émettre la ville sélectionnée
  }

  detectLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.searchCity = 'Autour de moi';
          this.locationSelected.emit('Autour de moi');
        },
        (error) => {
          alert('Impossible d’accéder à votre position');
        }
      );
    }
  }
}