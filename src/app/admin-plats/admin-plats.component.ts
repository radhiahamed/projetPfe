import { Component, OnInit } from '@angular/core';

interface Plat {
nomRes: string;
  id: number;
  nom: string;
  categorie: string;
  prix: number;
}
@Component({
  selector: 'app-admin-plats',
  templateUrl: './admin-plats.component.html',
  styleUrls: ['./admin-plats.component.css']
})
export class AdminPlatsComponent implements OnInit {
onAddDish: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 plats: Plat[] = [
    { id: 1, nom: 'Couscous',nomRes:'La mascotte',categorie: 'Main course', prix: 15 },
    {
      id: 2, nom: 'Salade',nomRes: 'TONTON', categorie: 'Entries', prix: 8,
      
    },
  ];

  // Pour générer un nouvel ID simple
  private nextId = this.plats.length + 1;

  // Ajouter un nouveau plat (exemple simple, ici on ajoute un plat statique)
  

  // Modifier un plat (exemple: change juste le nom ici)
  onEditDish(plat: Plat) {
    const nouveauNom = prompt('Modifier le nom du plat:', plat.nom);
    if (nouveauNom !== null && nouveauNom.trim() !== '') {
      plat.nom = nouveauNom.trim();
    }
  }

  // Supprimer un plat (demande confirmation)
  onDeleteDish(plat: Plat) {
    if (confirm(`Voulez-vous vraiment supprimer le plat "${plat.nom}" ?`)) {
      this.plats = this.plats.filter(p => p.id !== plat.id);
    }
  }
}
