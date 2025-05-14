import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../json-data-service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']  // Assure-toi d'ajouter le fichier de style si nécessaire
})
export class RecommendationComponent implements OnInit {
  restaurants: any[] = [];

  constructor(private jsonDataService: JsonDataService) {}

  ngOnInit(): void {
    this.jsonDataService.getCleanedRestaurants().subscribe((data: any[]) => {
      this.restaurants = data;
      this.restaurants = this.jsonDataService.sortRestaurantsByRating(this.restaurants); // Tri par note
      console.log('Restaurants triés par note :', this.restaurants);
    });
  }
}
