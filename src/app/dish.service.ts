import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  // Variable pour stocker le plat sélectionné
  private selectedDishSource = new BehaviorSubject<any>(null);
  selectedDish$ = this.selectedDishSource.asObservable();

  // Fonction pour mettre à jour le plat sélectionné
  selectDish(dish: any) {
    this.selectedDishSource.next(dish);
  }
}
