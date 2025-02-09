import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  showHoraires: boolean = false; // Par défaut, les horaires sont cachés

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  toggleHoraires() {
    this.showHoraires = !this.showHoraires; // Inverser l'affichage
  }
}
