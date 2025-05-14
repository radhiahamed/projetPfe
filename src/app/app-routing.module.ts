import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { TableComponent } from './table/table.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { ChatComponent } from './chat/chat.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRestaurantsComponent } from './admin-restaurants/admin-restaurants.component';
import { AdminTablesComponent } from './admin-tables/admin-tables.component';
import { AdminReservationsComponent } from './admin-reservations/admin-reservations.component';



const routes: Routes = [
  { path: '', component: HomeComponent },  // accueil
  { path: 'restaurant', component: RestaurantsComponent },
  { path: 'restaurant/:name', component: RestaurantsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu/:category', component: MenuComponent },
  { path: 'menu/by-type/:type', component: MenuComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'reservation/:restaurantName', component: ReservationComponent },
  { path: 'reservation/:restaurantName/:tableNumber', component: ReservationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotpasswordComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'map', component: MapComponent },
  { path: 'tables', component: TableComponent },
  { path: 'tables/:id', component: TableComponent },
  { path: 'table/:restaurantName', component: TableComponent },
  { path: 'order', component: OrderComponent },
  { path: 'recommendation', component: RecommendationComponent },
  { path: 'chat', component: ChatComponent },

  // Admin
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'admin/restaurants', component: AdminRestaurantsComponent },
  { path: 'admin/tables', component: AdminTablesComponent },
  { path: 'admin/reservations', component: AdminReservationsComponent },

  // Wildcard (doit être dernier)
  { path: '**', redirectTo: '', pathMatch: 'full' } // redirection vers accueil pour les routes inconnues
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
