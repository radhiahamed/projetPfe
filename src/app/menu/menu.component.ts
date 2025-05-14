import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  category: string = '';
  type: string = '';
  filteredRestaurants: any[] = [];
  activeCategory: string | null = null;
  selectedPlat: any = null;
  cart: any[] = [];

  // Liste des restaurants avec leurs plats
  restaurants = [
    {
      name: 'Tonton',
      plats: [
        {
          name: 'Chicken Couscous',
          price: 26,
          image: 'assets/coscous poulet.png',
          category: 'traditionnels',
          type: 'plats traditionnels',
          supplements: [
            {
              name: "Accompagnements",
              options: [
                { name: 'Salade verte fraîche', selected: false },
                { name: 'Sauce harissa maison', selected: false },
                { name: 'Légumes grillés', selected: false }
              ]
            },
            {
              name: "Crudités", 
              options: [
                { name: 'Salade', selected: false },
                { name: 'Tomate', selected: false },
                { name: 'Oignons', selected: false }
              ]
            },
            {
              name: "Spicy",
              options: [
                { name: 'Yes', selected: false },
                { name: 'No', selected: false }
              ]
            }
          ]
        },
        {
          name: 'Seafood Spaghetti',
          price: 46,
          image: 'assets/spaghetti.png',
          category: 'traditionnels',
          supplements: [
            {
              name: "Accompagnements",
              options: [
                { name: 'Salade verte fraîche', selected: false },
                { name: 'Sauce harissa maison', selected: false },
                { name: 'Légumes grillés', selected: false }
              ]
            },
            {
              name: "Crudités",
              options: [
                { name: 'Salade', selected: false },
                { name: 'Tomate', selected: false },
                { name: 'Oignons', selected: false }
              ]
            },
            {
              name: "Spicy",
              options: [
                { name: 'Yes', selected: false },
                { name: 'No', selected: false }
              ]
            }
          ]
        },
        {
          name: 'Besbes Merguez & Kadid',
          price: 20,
          image: 'assets/besbes .png',
          category: 'traditionnels',
          type: 'plats traditionnels',

          supplements: [
            {
              name: "Accompagnements",
              options: [
                { name: 'Salade verte fraîche', selected: false },
                { name: 'Sauce harissa maison', selected: false },
                { name: 'Légumes grillés', selected: false }
              ]
            },
            {
              name: "Crudités",
              options: [
                { name: 'Salade', selected: false },
                { name: 'Tomate', selected: false },
                { name: 'Oignons', selected: false }
              ]
            },
            {
              name: "Spicy",
              options: [
                { name: 'Yes', selected: false },
                { name: 'No', selected: false }
              ]
            }
          ]
        },
        {
          name: 'Burger Pané',
          price: 32,
          image: 'assets/burger pané.png',
          category: 'grillades',
          type: 'burger',
          supplements: [
            {
              name: "Accompagnements",
              options: [
                { name: 'Salade verte fraîche', selected: false },
                { name: 'Sauce harissa maison', selected: false },
                { name: 'Légumes grillés', selected: false }
              ]
            },
            {
              name: "Crudités",
              options: [
                { name: 'Salade', selected: false },
                { name: 'Tomate', selected: false },
                { name: 'Oignons', selected: false }
              ]
            },
            {
              name: "Spicy",
              options: [
                { name: 'Yes', selected: false },
                { name: 'No', selected: false }
              ]
            }
          ]
        },
        {
          name: 'Plats Tunisian',
          price: 18,
          image: 'assets/plats tunisian.png',
          category: 'traditionnels',
          supplements: [
            {
              name: "Accompagnements",
              options: [
                { name: 'Salade verte fraîche', selected: false },
                { name: 'Sauce harissa maison', selected: false },
                { name: 'Légumes grillés', selected: false }
              ]
            },
            {
              name: "Crudités",
              options: [
                { name: 'Salade', selected: false },
                { name: 'Tomate', selected: false },
                { name: 'Oignons', selected: true }
              ]
            },
            {
              name: "Spicy",
              options: [
                { name: 'Yes', selected: false },
                { name: 'No', selected: false }
              ]
            }
          ]
        },
        { 
          name: 'salade healthy', 
          price: 32, 
          image: 'assets/salade2.png',
          category: 'healthy' 
        },
        {
          name: 'Seafood Pizza',
          price: 33,
          image: 'assets/pizza.png',
          category: 'grillades',
          type: 'pizza',
          supplements: [
            {
              name: "Accompagnements",
              options: [
                { name: 'Salade verte fraîche', selected: false },
                { name: 'Sauce harissa maison', selected: false },
                { name: 'Légumes grillés', selected: false }
              ]
            },
            {
              name: "Crudités",
              options: [
                { name: 'Salade', selected: false },
                { name: 'Tomate', selected: false },
                { name: 'Oignons', selected: false }
              ]
            },
            {
              name: "Spicy",
              options: [
                { name: 'Yes', selected: false },
                { name: 'No', selected: false }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'La Mascotte',
      plats: [
        {
          name: 'Sandwich Shawarma',
          price: 11,
          image: 'assets/sandwitch ton ton.png',
          category: 'grillades',
          supplements: [
            {
              name: "Crudités",
              options: [
                { name: 'Salade', selected: false },
                { name: 'Tomate', selected: false },
                { name: 'Mayonnaise', selected: false },
                { name: 'Oignons', selected: false }
              ]
            }
          ]
        },
        {
          name: 'Burger Picador',
          price: 32,
          image: 'assets/Burger Picador.png',
          category: 'grillades',
          type: 'burger',
          supplements: [
            {
              name: "Options",
              options: [
                { name: 'Salade', selected: false },
                { name: 'Tomate', selected: false },
                { name: 'Mayonnaise', selected: false },
                { name: 'Oignons', selected: false }
              ]
            }
          ]
        },
        { 
          name: 'Salade healthy', 
          price: 32, 
          image: 'assets/salade.png',
          category: 'healthy' 
        },
        {
          name: 'Pasta Crevette',
          price: 32,
          image: 'assets/image10.jpg',
          category: 'plats italy',
          supplements: [
            {
              name: "Options",
              options: [
                { name: 'Salade', selected: false },
                { name: 'Tomate', selected: false },
                { name: 'Mayonnaise', selected: false },
                { name: 'Oignons', selected: false }
              ]
            }
          ]
        },
        {
          name: 'Sandwich Mergaz',
          price: 32,
          image: 'assets/sandwich.png',
          category: 'grillades',
          supplements: [
            {
              name: "Options",
              options: [
                { name: 'Salade', selected: false },
                { name: 'Tomate', selected: false },
                { name: 'Mayonnaise', selected: false },
                { name: 'Oignons', selected: false }
              ]
            }
          ]
        }
      ]
    }
  ];

  constructor(
    private orderService: OrderService, 
    private router: Router,
    private db: AngularFireDatabase,
    private route: ActivatedRoute
  ) {
    this.cart = this.orderService.getCart();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';
      this.type = params.get('type') || '';
      this.filterPlats();
    });
  }

  filterPlats() {
    this.filteredRestaurants = this.restaurants.map(restaurant => {
      return {
        ...restaurant,
        plats: restaurant.plats.filter(plat => {
          // Filtre par catégorie si spécifié
          const categoryMatch = !this.category || 
                             plat.category?.toLowerCase() === this.category.toLowerCase();
          
          // Filtre par type si spécifié
          const typeMatch = !this.type || 
                          plat.type?.toLowerCase() === this.type.toLowerCase();
          
          return categoryMatch && typeMatch;
        })
      };
    }).filter(restaurant => restaurant.plats.length > 0);
  }

  // Méthode pour obtenir les suppléments sélectionnés
  getSelectedSupplements(): any[] {
    if (!this.selectedPlat?.supplements) return [];
    return this.selectedPlat.supplements.flatMap((category: { options: any[]; }) => 
      category.options.filter(option => option.selected)
    );
  }

  // Méthode pour basculer une catégorie
  toggleCategory(categoryName: string): void {
    this.activeCategory = this.activeCategory === categoryName ? null : categoryName;
  }

  toggleSupplementOption(option: any): void {
    option.selected = !option.selected;
  }

  // Ajouter un plat au panier
  addToOrder(plat: any, restaurantName: string) {
    this.orderService.addToOrder(plat, restaurantName);
    alert(`🍽️ Plat "${plat.name}" ajouté au panier depuis "${restaurantName}" !`);
  }

  // Annuler la commande
  cancelOrder() {
    if (confirm("❌ Voulez-vous vraiment annuler votre commande ?")) {
      this.orderService.clearCart();
      alert("Commande annulée !");
    }
  }

  // Obtenir le total du panier
  getTotal() {
    return this.orderService.getTotal();
  }

  openSupplements(plat: any) {
    this.selectedPlat = plat;
  }
  
  closeSupplements() {
    this.selectedPlat = null;
  }
  
  // Valider la commande
  validateOrder() {
    if (this.cart.length === 0) {
      alert("🚫 Votre panier est vide !");
      return;
    }
    this.router.navigate(['/order']);
  }
}