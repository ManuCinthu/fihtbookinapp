import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserBookComponent } from './user-book/user-book.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { AppRoutingModule } from './app-routing.module';
import { SearhResultsComponent } from './searh-results/searh-results.component';
import { LoginmoduleComponent } from './loginmodule/loginmodule.component';
import { ManageairlinesComponent } from './manageairlines/manageairlines.component';
import { RegisterComponent } from './register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsermoduleComponent } from './usermodule/usermodule.component';
import { AdminmoduleComponent } from './adminmodule/adminmodule.component';
import { ManagescheduleComponent } from './manageschedule/manageschedule.component';
import { ScheduleresultsComponent } from './scheduleresults/scheduleresults.component';
import { AddairlinesComponent } from './addairlines/addairlines.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './auth/auth-interceptor';
import { ManagediscountsComponent } from './managediscounts/managediscounts.component';


@NgModule({
  declarations: [
    AppComponent,
    UserBookComponent,
    TicketBookingComponent,
    ManageBookingComponent,
    BookingHistoryComponent,
    SearhResultsComponent,
    LoginmoduleComponent,
    ManageairlinesComponent,
    RegisterComponent,
    UsermoduleComponent,
    AdminmoduleComponent,
    ManagescheduleComponent,
    ScheduleresultsComponent,
    AddairlinesComponent,
    HomeComponent,
    ProfileComponent,
    ManagediscountsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
