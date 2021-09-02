import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserBookComponent } from './user-book/user-book.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { SearhResultsComponent } from './searh-results/searh-results.component';
import { LoginmoduleComponent } from './loginmodule/loginmodule.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { UsermoduleComponent } from './usermodule/usermodule.component';
import { AdminmoduleComponent } from './adminmodule/adminmodule.component';
import { ManageairlinesComponent } from './manageairlines/manageairlines.component';
import { ManagescheduleComponent } from './manageschedule/manageschedule.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ManagediscountsComponent } from './managediscounts/managediscounts.component';



  const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginmoduleComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    // {path:'userbookId', component:UserBookComponent},
    {path: 'searchresultId', component: SearhResultsComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'user', component: UsermoduleComponent ,
    children: [
      {path:'userbookId', component:UserBookComponent},
      { path: 'managebookingId', component: ManageBookingComponent },
      { path: 'bookinghistoryId', component: BookingHistoryComponent },
      {path:'',redirectTo:'userbookId', pathMatch:'full'}
    ]},
    { path: 'admin', component: AdminmoduleComponent,
    children:[
    {path: 'airlineId', component: ManageairlinesComponent},
    {path:'scheduleId',component:ManagescheduleComponent},
    {path:'discountId',component:ManagediscountsComponent},
    {path:'',redirectTo:'airlineId', pathMatch:'full'},
     

    ]}
    
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }