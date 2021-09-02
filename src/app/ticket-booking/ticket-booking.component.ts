import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Listflights } from '../models/listflights';
import { Managebooking } from '../models/managebooking';
import { ManagebookingsService } from '../services/managebookings.service';


const PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";

@Component({
  template: `<h1>Passing Static Data Demo</h1>
         {{putdetails  | json}}`,
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})



export class TicketBookingComponent implements OnInit {

// @Input() childPosts:any[]=[];
bookingmodel: Managebooking = new Managebooking();


flightmodel:Listflights= new Listflights();


  
ticketbookingvalidateForm= this.fb.group(
    {
      firstnameId: ['',[Validators.required]],
      lastnameId:['',[Validators.required]],
      emailId:['',[Validators.required,Validators.pattern(PAT_EMAIL)]],
      pplId:['',[Validators.required]],
      priceId:['',[Validators.required]],

     
    }
  );
  isSubmitted: boolean=false;
  

  constructor(private fb:FormBuilder, private router:Router,
    private managebookingservice:ManagebookingsService) { }

 ticketbookingForm=this.fb.group({
    ticketbookingId:['']
  });

 
  

  handleSubmit(){
    this.isSubmitted = true;
  }

  fc(){
    return this.ticketbookingvalidateForm.controls;
  }
  fetchAllbookings(){
    this.managebookingservice.fetchmanagebookings().subscribe((res:any)=>{
      console.log(res);
      this.bookingmodel = res;
     
      console.log("after req sent...")
    });   
  }

postdetails() {
  
  // this.bookingmodel.flightnames = this.ticketbookingvalidateForm.value.flightnames;
  // this.bookingmodel.firstname=this.ticketbookingvalidateForm.value.firstnameId;
  // this.bookingmodel.lastname=this.ticketbookingvalidateForm.value.lastnameId
  // this.bookingmodel.passengers=this.ticketbookingvalidateForm.value.pplId;
  // this.bookingmodel.email=this.ticketbookingvalidateForm.value.emailId;
  // this.bookingmodel.fromlocation=this.ticketbookingvalidateForm.value.fromlocation;
  // this.bookingmodel.tolocation=this.ticketbookingvalidateForm.value.tolocation;
 
  this.bookingmodel.bckagePrice=this.ticketbookingvalidateForm.value.priceId;

  this.managebookingservice.createbookings(this.bookingmodel).subscribe(res => {
    console.log(res);
    alert("Details added");
    let ref = document.getElementById("cancel");
    ref?.click();
    this.ticketbookingvalidateForm.reset();
    this.fetchAllbookings();

  },
    error => {
      alert("Something went wrong");
    })

}


btnnav(){
  this.router.navigateByUrl('/home');
}

btnClickBack(){
  this.router.navigateByUrl('/searchresultId');
};

  ngOnInit(): void {
    this.fetchAllbookings();
   
  }

  

}
