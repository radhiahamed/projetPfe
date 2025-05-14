import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Angular Material Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

// Firebase Modules
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { TableComponent } from './table/table.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { ChatComponent } from './chat/chat.component';
import { SafeUrlPipe } from './safe-url.pipe';

// Services
import { ReservationService } from './reservation.service';
import { JsonDataService } from './json-data-service';
import { environment } from '../environments/environment';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRestaurantsComponent } from './admin-restaurants/admin-restaurants.component';
import { AdminTablesComponent } from './admin-tables/admin-tables.component';
import { AdminReservationsComponent } from './admin-reservations/admin-reservations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantsComponent,
    ReservationComponent,
    LoginComponent,
    MenuComponent,
    ForgotpasswordComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    MapComponent,
    TableComponent,
    RegisterComponent,
    OrderComponent,
    RecommendationComponent,
    ChatComponent,
    SafeUrlPipe,
    AdminDashboardComponent,
    AdminRestaurantsComponent,
    AdminTablesComponent,
    AdminReservationsComponent
  ],
  imports: [
    // Core Modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,

    // Firebase (compat mode)
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,

    // New Firebase API (modular)
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    ReservationService,
    JsonDataService,
    MatDatepickerModule // Add as provider if needed for datepicker configuration
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }