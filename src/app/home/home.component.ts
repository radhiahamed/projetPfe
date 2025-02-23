import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showDropdown = false;
  selectedCity: string = 'Sfax';
  cities: string[] = ['Beb bhar', 'Teniour', 'Gremda', 'EL Ain', 'Lafrane', 'Soukra', 'Kaid Mhamed', 'Bouzayen', ];  
  searchQuery: string = '';

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectCity(city: string) {
    this.selectedCity = city;
    this.showDropdown = false;
  }

  detectLocation() {
    this.selectedCity = 'Autour de moi';
    this.showDropdown = false;
  }

  searchRestaurants() {
    console.log('Recherche de restaurants pour :', this.searchQuery, 'dans', this.selectedCity);
  }
}