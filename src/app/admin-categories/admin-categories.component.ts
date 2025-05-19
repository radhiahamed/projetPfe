import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 categories = [
    { id: 1, nom: 'Entries' },
    { id: 2, nom: 'Plats' },
    { id: 3, nom: 'Desserts' },
  ];

  onEditCategory(cat: any) {
    // Par exemple ouvrir un formulaire pour modifier la catégorie
    console.log('Modifier la catégorie', cat);
    // Ici tu peux ouvrir un modal, ou changer l'état pour afficher un formulaire
  }

  onDeleteCategory(cat: any) {
    // Confirmer la suppression avant de supprimer
    const confirmed = confirm(`Voulez-vous vraiment supprimer la catégorie "${cat.nom}" ?`);
    if (confirmed) {
      this.categories = this.categories.filter(c => c.id !== cat.id);
      console.log('Catégorie supprimée', cat);
    }
  }

  onAddCategory() {
    // Par exemple ouvrir un formulaire vide pour ajouter une catégorie
    console.log('Ajouter une nouvelle catégorie');
  }
}

  