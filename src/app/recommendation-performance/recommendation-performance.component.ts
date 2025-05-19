import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-recommendation-performance',
  templateUrl: './recommendation-performance.component.html',
  styleUrls: ['./recommendation-performance.component.css']
})
export class RecommendationPerformanceComponent implements OnInit {

  topRestaurants: any[] = [];
  isLoading: boolean = true;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/top_restaurants.json').subscribe({
      next: (data) => {
        this.topRestaurants = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement du JSON', err);
        this.error = 'Impossible de charger les recommandations.';
        this.isLoading = false;
      }
    });
  }
  ngAfterViewInit(): void {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
}

}
