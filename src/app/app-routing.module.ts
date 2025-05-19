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
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminPlatsComponent } from './admin-plats/admin-plats.component';
import { AdminCommandesComponent } from './admin-commandes/admin-commandes.component';
import { AdminNotificationsComponent } from './admin-notifications/admin-notifications.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecommendationPerformanceComponent } from './recommendation-performance/recommendation-performance.component';



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
{ path: 'recommendation-performance', component: RecommendationPerformanceComponent },
  // Admin 
   {
  path: 'admin',
  component: AdminDashboardComponent, // le layout contenant <router-outlet>
  children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'restaurants', component: AdminRestaurantsComponent },
    { path: 'tables', component: AdminTablesComponent },
    { path: 'reservations', component: AdminReservationsComponent },
    { path: 'categories', component: AdminCategoriesComponent },
    { path: 'plats', component: AdminPlatsComponent },
    { path: 'commandes', component: AdminCommandesComponent },
    { path: 'notifications', component: AdminNotificationsComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
