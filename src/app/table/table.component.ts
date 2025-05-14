import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; // Importation d'ActivatedRoute

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  selectedRestaurantName!: string;
  tables = [
    { number: 1, description: 'Table with a panoramic city view, perfect for a romantic experience.', reserved: false, icon: 'assets/view.jfif' },
    { number: 2, description: 'A friendly space for groups of friends, with a warm and cozy atmosphere.', reserved: false, icon: 'assets/friend.jpg' },
    { number: 3, description: 'Spacious family table, ideal for sharing unforgettable moments.', reserved: false, icon: 'assets/famille.jfif' },
    { number: 4, description: 'Outdoor terrace with a gentle breeze and a stunning view.', reserved: false, icon: 'assets/terasse.jfif'},
    { number: 5, description: 'Cozy and intimate corner, perfect for a romantic dinner.', reserved: false, icon: 'assets/romantique.jfif' },
    { number: 6, description: 'VIP table with premium service and a touch of elegance.', reserved: false, icon: 'assets/VIP.jfif' },
    { number: 7, description: 'Lounge-style ambiance with dim lighting for a relaxing evening.', reserved: true, icon: 'assets/ambiance.jfif' },
    { number: 8, description: 'Central table in the restaurant to fully enjoy the lively atmosphere.', reserved: false, icon: 'assets/central.jfif' }
  ];



  constructor(private router: Router, private route: ActivatedRoute) {}

 
    // Récupération de l’ID et du nom du restaurant depuis les paramètres de l’URL
    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.selectedRestaurantName = params['restaurant'] ? params['restaurant'] : 'Restaurant inconnu'; 
      });
    
      console.log('Restaurant sélectionné:', this.selectedRestaurantName);
    }
    
    

  // Redirection vers la page de réservation avec les paramètres (nom du restaurant et numéro de table)
  goToReservation(tableNumber: number) {
    this.router.navigate(['/reservation'], { 
      queryParams: { 
        restaurant: this.selectedRestaurantName, // ✅ Transmettre le bon nom du restaurant
        table: tableNumber 
      } 
    });
  }
}
