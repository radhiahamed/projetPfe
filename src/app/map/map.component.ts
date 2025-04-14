import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // URL de Google Maps avec les coordonnées de Sfax
  mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52451.972224413024!2d10.728621787556978!3d34.7493384461542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13002e4f8d5d5a5b%3A0x9f8d1c5b1c5b1c5b!2sSfax%2C%20Tunisia!5e0!3m2!1sen!2stn!4v1633020000000!5m2!1sen!2stn';

  // Liste des restaurants
  restaurants = [
    { id: 1, name: 'La Mascotte', address: 'Rte du Kaïd Mhamed, Sfax', rating: 4.5, cuisine: 'French', lat: 34.76892177256687, lng:  10.742750297633478, promo: '10% discount' },
    { id: 2, name: 'TONTON', address: 'City Centre Building, Rue Majida Boulila', rating: 4.2, cuisine: 'Tunisian', lat: 34.74282366215929,  lng: 10.75397567487988, promo: 'Free dessert' },
    { id: 3, name: 'El Kolla', address: 'km3 Rte Soukra, Sfax 3000', rating: 4.7, cuisine: 'Italian', lat: 34.7270649914782, lng: 10.725673751576402, promo: 'Special offer: Free dish' },
    { id: 4, name: 'La Raclette', address: 'Gremda km 4.5, Sfax', rating: 4.0, cuisine: 'French', lat: 34.77106607762929, lng: 10.742688551609831 },
    { id: 5, name: 'Trocadero Sfax', address: 'Route Lafrane km 4, Sfax', rating: 4.8, cuisine: 'Tunisian', lat: 35.12631365474704,  lng: 10.843097928965472},
    { id: 6, name: 'Pomme de Mer', address: 'Route Kaid Mohamad km2, Sfax 3002', rating: 4.6, cuisine: 'Seafood', lat: 34.75577373201232, lng:  10.753280513523151 },
    { id: 7, name: 'La Voile Blanche', address: 'Route Teniour, Sfax', rating: 4.3, cuisine: 'French', lat: 34.75343318510028, lng: 10.757494859546338 },
    { id: 8, name: 'Le Raffiné', address: 'Rte Gremda, Sfax 3000', rating: 4.9, cuisine: 'Italian', lat: 34.7680156880049 , lng: 10.738904005582913 },
  ];

  // Filtres
  selectedCuisine: string = '';
  minRating: number = 0;
  cuisineTypes = ['Tunisian', 'French', 'Italian', 'Seafood'];
  filteredRestaurants = this.restaurants;

  // Clé API Google Maps
  googleMapsApiKey = environment.googleMapsApiKey;
selectedPromotion: any;
promotions: any;
navigateToReservation: any;
  userLat!: number;
  userLng!: number;
  initMap: any;
restaurant: any;
selectedDate: string = '';
selectedTime: string = '';
selectedGuests: number = 0;
city: any;

resetFilter: any;
cuisines: any;


  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadGoogleMaps();
  }
  filterByDateTimeGuests() {
    this.filteredRestaurants = this.filteredRestaurants.filter(restaurant => 
      this.selectedDate && this.selectedTime && this.selectedGuests > 0
    );
  }
  onCuisineChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedCuisine = target.value;
    this.filterRestaurants();
  }
  
  filterRestaurants() {
    if (!this.selectedCuisine) {
      this.filteredRestaurants = this.restaurants; // Affiche tous les restaurants si aucun type sélectionné
    } else {
      this.filteredRestaurants = this.restaurants.filter(
        restaurant => restaurant.cuisine === this.selectedCuisine
      );
    }
  }
  navigateToRestaurant(id: number) {
    console.log('Redirection vers restaurant :', id);
    this.router.navigate([`/restaurant/${id}`]);
  }
  // Charger l'API Google Maps
  loadGoogleMaps(): void {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${this.googleMapsApiKey}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    (window as any).initMap = () => this.initMap(); // Appeler initMap() après le chargement
  }

  // Filtrer les restaurants
  maxDistance: number = 10; // Distance maximale par défaut

  filterByCuisine(cuisineType: string) {
    if (cuisineType === "Tous types de cuisine") {
      this.filteredRestaurants = this.restaurants; // Réinitialise si "tous"
    } else {
      this.filteredRestaurants = this.restaurants.filter(
        (restaurant) => restaurant.cuisine === cuisineType
      );
    }
  }
  hasPromotions(): boolean {
    return this.filteredRestaurants.some(restaurant => restaurant.promo);
  }
  
  // Naviguer vers la page d'un restaurant
  
  getDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Rayon de la Terre en km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
  
  
  // Trier par distance
  sortByDistance() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.userLat = position.coords.latitude;
          this.userLng = position.coords.longitude;
  
          this.filteredRestaurants.sort((a, b) => {
            const distanceA = this.getDistance(this.userLat, this.userLng, a.lat, a.lng);
            const distanceB = this.getDistance(this.userLat, this.userLng, b.lat, b.lng);
            return distanceA - distanceB;
          });
        },
        () => {
          alert("Impossible de récupérer votre position !");
        }
      );
    } else {
      alert("La géolocalisation n'est pas supportée par votre navigateur.");
    }
  }
}  