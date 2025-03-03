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



const routes: Routes = [
{ path: '', component: HomeComponent},
{ path: 'restaurant', component: RestaurantsComponent},
{ path: 'reservation', component: ReservationComponent},
{path: 'menu', component: MenuComponent},
{path: 'login', component: LoginComponent},
{path: 'forgot-password', component: ForgotpasswordComponent},
{ path: 'register', component: RegisterComponent},
{path: 'footer', component: FooterComponent},
{path: 'about', component: AboutComponent},
{path: 'contact', component: ContactComponent},
{path: 'map', component: MapComponent},
{ path: 'reservation/:restaurantName', component: ReservationComponent },
{ path: 'reservation/:restaurantName/:tableNumber', component: ReservationComponent },
{path: 'tables', component: TableComponent},
{path: 'order', component: OrderComponent},
{ path: 'tables/:id', component: TableComponent },
{ path: '**', redirectTo: '' }, // Redirection pour les URL inconnues
{ path: 'table/:restaurantName', component: TableComponent }, // Récupérer le nom du restaurant
{ path: 'reservation/:restaurantName', component: ReservationComponent }, // Récupérer le nom du restaurant
{ path: 'reservation/:restaurantName/:tableNumber', component: ReservationComponent },
{ path: '', redirectTo: '/restaurants', pathMatch: 'full' },
{ path: '**', redirectTo: '/restaurants' },  // ✅ Redirection des erreurs

{ path: 'reservation/:restaurantName/:tableNumber', component: ReservationComponent },  // Assure-toi que ça inclut tableNumber

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
