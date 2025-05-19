// recommendation.component.ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecommendationService } from '../recommendation.service';

interface Restaurant {
  nom: string;
  score_ia: number;
  // Ajoute d'autres propriétés si nécessaire
}

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  recommendations$!: Observable<Restaurant[]>;

  constructor(private recommendationService: RecommendationService) {}

  ngOnInit(): void {
    this.loadRecommendations();
  }

  loadRecommendations() {
    this.recommendations$ = this.recommendationService.getRecommendations();
  }
}