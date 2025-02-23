import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; // Importation d'ActivatedRoute
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  restaurantName: string = ''; // Initialiser la variable restaurantName
  tables = [
    { number: 1, description: 'Table with a panoramic city view, perfect for a romantic experience.', reserved: false },
    { number: 2, description: 'A friendly space for groups of friends, with a warm and cozy atmosphere.', reserved: true },
    { number: 3, description: 'Spacious family table, ideal for sharing unforgettable moments.', reserved: false },
    { number: 4, description: 'Outdoor terrace with a gentle breeze and a stunning view.', reserved: true },
    { number: 5, description: 'Cozy and intimate corner, perfect for a romantic dinner.', reserved: false },
    { number: 6, description: 'VIP table with premium service and a touch of elegance.', reserved: false },
    { number: 7, description: 'Lounge-style ambiance with dim lighting for a relaxing evening.', reserved: true },
    { number: 8, description: 'Central table in the restaurant to fully enjoy the lively atmosphere.', reserved: false }
  ];


  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupère le restaurantName depuis l'URL et l'affiche
    this.restaurantName = this.route.snapshot.paramMap.get('restaurantName') || '';
    console.log('Restaurant choisi:', this.restaurantName);  // Vérifie dans la console
  }

  goToReservation(tableNumber: number) {
    this.router.navigate(['/reservation', this.restaurantName, tableNumber]);  // Envoie du restaurantName et du numéro de la table
  }
}
