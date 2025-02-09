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


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'restaurant', component: RestaurantsComponent},
  { path: 'reservation', component: ReservationComponent},
{path: 'menu', component: MenuComponent},
{path: 'login', component: LoginComponent},
{path: 'forgot-password', component: ForgotpasswordComponent},
{path: 'footer', component: FooterComponent},
{path: 'about', component: AboutComponent},
{path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
