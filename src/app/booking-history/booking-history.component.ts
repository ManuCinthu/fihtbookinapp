import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Bookinghistory } from '../models/bookinghistory';
import { BookinghistoryService } from '../services/bookinghistory.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  bookinghistory:any;
  

  bookinghistorymodel: Bookinghistory = new Bookinghistory();
  isSubmitted: boolean = false;
  constructor(private fb:FormBuilder,private bookinghistoryservice:BookinghistoryService) { }

 bookinghistoryForm=this.fb.group({
  bookinghistoryId:[''],
      flightnames: ['', [Validators.required]],
      flightnumber: ['', [Validators.required]],
      contactnumber: ['', [Validators.required]],
      departfrom: ['', [Validators.required]],
      gotolocation: ['', [Validators.required]],
      // arrivaltime: ['', [Validators.required]],
      // departuretime: ['', [Validators.required]],
      passengers:['',[Validators.required]],
      price:['',[Validators.required]],
      duration:['',[Validators.required]],
      returndate:['',[Validators.required]],
      departdate:['',[Validators.required]],
      bckagePrice:['',[Validators.required]],
      checkedbags:['',[Validators.required]],
      handbags:['',[Validators.required]],

  });



  bookinghistoryvalidateForm=this.fb.group({
    bookinghistoryId:[''],
        flightnames: ['', [Validators.required]],
        flightnumber: ['', [Validators.required]],
        contactnumber: ['', [Validators.required]],
        departfrom: ['', [Validators.required]],
        gotolocation: ['', [Validators.required]],
        // arrivaltime: ['', [Validators.required]],
        // departuretime: ['', [Validators.required]],
        passengers:['',[Validators.required]],
        price:['',[Validators.required]],
        duration:['',[Validators.required]],
        returndate:['',[Validators.required]],
        departdate:['',[Validators.required]],
        bckagePrice:['',[Validators.required]],
        checkedbags:['',[Validators.required]],
        handbags:['',[Validators.required]],
  
    });

  ngOnInit(): void {
    this.fetchAllBookingHistory();
  }

  fetchAllBookingHistory(){
    this.bookinghistoryservice.fetchBookingHistory().subscribe((res:any)=>{
      console.log(res);
      this.bookinghistory = res;
      console.log("after req sent...")
    });   
  }


  fetchfightsbyId(id:number){
    console.log(id)
    this.bookinghistoryservice.fetchBookingHistoryById(id).subscribe((res:any)=>{
      console.log(res);
      this.fetchAllBookingHistory();
    })
  }

  

  
  handleSubmit() {
    this.isSubmitted = true;
  }

  fc() {
    return this.bookinghistoryvalidateForm.controls;
  }

  putdetails(listb: any) {
   
    this.bookinghistorymodel.id = listb.id;
    this.bookinghistoryvalidateForm.controls['flightnames'].setValue(listb.flightnames);
    this.bookinghistoryvalidateForm.controls['flightnumber'].setValue(listb.flightnumber);
    this.bookinghistoryvalidateForm.controls['departfrom'].setValue(listb.departfrom);
    this.bookinghistoryvalidateForm.controls['gotolocation'].setValue(listb.gotolocation);
    // this.bookinghistoryvalidateForm.controls['arrivaltime'].setValue(listb.arrivaltime);
    // this.bookinghistoryvalidateForm.controls['departuretime'].setValue(listb.departuretime);
    this.bookinghistoryvalidateForm.controls['passengers'].setValue(listb.passengers);
    this.bookinghistoryvalidateForm.controls['duration'].setValue(listb.duration);
    this.bookinghistoryvalidateForm.controls['returndate'].setValue(listb.returndate);
    this.bookinghistoryvalidateForm.controls['departdate'].setValue(listb.departdate);
    this.bookinghistoryvalidateForm.controls['bckagePrice'].setValue(listb.bckagePrice);
    this.bookinghistoryvalidateForm.controls['checkedbags'].setValue(listb.checkedbags);
    this.bookinghistoryvalidateForm.controls['handbags'].setValue(listb.handbags);
  }

}
