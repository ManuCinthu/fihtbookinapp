import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Bookinghistory } from '../models/bookinghistory';
import { Listflights } from '../models/listflights';
import { Managebooking } from '../models/managebooking';
import { Viewfarelist } from '../models/viewfarelist';
import { BookinghistoryService } from '../services/bookinghistory.service';
import { ListflightsService } from '../services/listflights.service';
import { ManageairlinesService } from '../services/manageairlines.service';
import { ManagebookingsService } from '../services/managebookings.service';
import { ViewfarelistService } from '../services/viewfarelist.service';

@Component({
  
  selector: 'app-searh-results',
  templateUrl: './searh-results.component.html',
  styleUrls: ['./searh-results.component.css']
})
export class SearhResultsComponent implements OnInit {

  flightlist:Listflights[] = [];
  viewfarelist:Viewfarelist[]=[];
  closeResult: string | undefined;
  isSubmitted: boolean=false;
  bookingmodel: Managebooking = new Managebooking();
  bookinghistory:Bookinghistory=new Bookinghistory();

  flightmodel:Listflights= new Listflights();
  parentPost: any[]=[];
  searchlist="";
  results: number | undefined;
  
  constructor(private fb: FormBuilder, private router: Router,
    private listflightservice:ListflightsService,
    private viewfareservice:ViewfarelistService,private modalService:NgbModal,
    private activatedroute:ActivatedRoute,
    private managebookingservice:ManagebookingsService,
    private bookinghistoryservice:BookinghistoryService,
    private manageairlineservice: ManageairlinesService) { }

  
  searchresultsForm = this.fb.group({
    searchresultId: ['']
  });
  viewFaresForm=this.fb.group({
    viewsfareId:[''],
    

      flightnames: ['', [Validators.required]],
      flightnumber: ['', [Validators.required]],
      contactnumber: ['', [Validators.required]],
      departfrom: ['', [Validators.required]],
      gotolocation: ['', [Validators.required]],
      arrivaltime: ['', [Validators.required]],
      departuretime: ['', [Validators.required]],
      passengers:['',[Validators.required]],
      price:['',[Validators.required]],
      duration:['',[Validators.required]],
      returndate:['',[Validators.required]],
      departdate:['',[Validators.required]],
      bckagePrice:['',[Validators.required]],
      handbags:['',[Validators.required]],
      checkedbags:['',[Validators.required]]



    
  })




  btnClickBack() {
    this.router.navigateByUrl('/home');
  }
  handleSubmit(){
    this.isSubmitted = true;
  }

 

  ngOnInit(): void {
     this.fetchAllFlights();
    //  this.fetchAllFlightsFares();
  //    this.activatedroute.data.subscribe(data => {
  //    data=this.putdetails(this.searchlist);
  // })
  }


  fetchAllFlights(){
    this.listflightservice.fetchFlights().subscribe((res:any)=>{
      console.log(res);
      this.flightlist = res;
      console.log("after req sent...")
    });   
  }



  


  btnnav(){
    this.router.navigateByUrl('/user');
  }


  fetchfightsbyId(id:number){
    console.log(id)
    this.listflightservice.fetchFlightsById(id).subscribe((res:any)=>{
      console.log(res);
      this.fetchAllFlights();
    })
  }

  // fetchAllFlightsFares(){
  //   this.viewfareservice.fetchfares().subscribe((res:any)=>{
  //     console.log(res);
  //     this.viewfarelist = res;
  //     console.log("after req sent...")
  //   });   
  // }

  fetchAllbookings(){
    this.managebookingservice.fetchmanagebookings().subscribe((res:any)=>{
      console.log(res);
      this.bookingmodel = res;
     
      console.log("after req sent...")
    });   
  }

  // getallflight() {
  //   this.manageairlineservice.fetchAirlines().subscribe(res => {
  //     this.bookingmodel = res;
  //   })
  // }


  putdetails(searchlist: any) {
   
    this.flightmodel.id = searchlist.id;
    this.viewFaresForm.controls['flightnames'].setValue(searchlist.flightnames);
    this.viewFaresForm.controls['flightnumber'].setValue(searchlist.flightnumber);
    this.viewFaresForm.controls['departfrom'].setValue(searchlist.departfrom);
    this.viewFaresForm.controls['gotolocation'].setValue(searchlist.gotolocation);
    this.viewFaresForm.controls['arrivaltime'].setValue(searchlist.arrivaltime);
    this.viewFaresForm.controls['departuretime'].setValue(searchlist.departuretime);
    this.viewFaresForm.controls['passengers'].setValue(searchlist.passengers);
    this.viewFaresForm.controls['price'].setValue(searchlist.price);
    this.viewFaresForm.controls['duration'].setValue(searchlist.duration);
    this.viewFaresForm.controls['returndate'].setValue(searchlist.returndate);
    this.viewFaresForm.controls['departdate'].setValue(searchlist.departdate);
    this.viewFaresForm.controls['bckagePrice'].setValue(searchlist.bckagePrice);
    this.viewFaresForm.controls['checkedbags'].setValue(searchlist.checkedbags);
    this.viewFaresForm.controls['handbags'].setValue(searchlist.handbags);
     console.log(searchlist);
 
  }


  

  createdetails(){
    this.bookingmodel.flightnames = this.viewFaresForm.value.flightnames;
    this.bookingmodel.flightnumber=this.viewFaresForm.value.flightnumber;
    this.bookingmodel.departfrom=this.viewFaresForm.value.departfrom;
    this.bookingmodel.gotolocation=this.viewFaresForm.value.gotolocation;
    this.bookingmodel.arrivaltime=this.viewFaresForm.value.arrivaltime;
    this.bookingmodel.departuretime=this.viewFaresForm.value.departuretime;
    this.bookingmodel.passengers=this.viewFaresForm.value.passengers;
    this.bookingmodel.duration=this.viewFaresForm.value.duration;
    this.bookingmodel.returndate=this.viewFaresForm.value.returndate;
    this.bookingmodel.departdate=this.viewFaresForm.value.departdate;
    this.bookingmodel.bckagePrice=this.viewFaresForm.value.bckagePrice;
    this.bookingmodel.handbags=this.viewFaresForm.value.handbags;
    this.bookingmodel.checkedbags=this.viewFaresForm.value.checkedbags;
    console.log(this.bookingmodel);
  
    this.managebookingservice.createBookings(this.bookingmodel).subscribe(res => {
      console.log(res);
      alert("Details updated");
      let ref = document.getElementById("cancel");
      ref?.click();
      this.viewFaresForm.reset();
      this.fetchAllbookings();
  
    },
      error => {
        alert("Something went wrong");
      })
  

  }

  createhistorydetails(){
    this.bookinghistory.flightnames = this.viewFaresForm.value.flightnames;
    this.bookinghistory.flightnumber=this.viewFaresForm.value.flightnumber;
    this.bookinghistory.departfrom=this.viewFaresForm.value.departfrom;
    this.bookinghistory.gotolocation=this.viewFaresForm.value.gotolocation;
    this.bookinghistory.arrivaltime=this.viewFaresForm.value.arrivaltime;
    this.bookinghistory.departuretime=this.viewFaresForm.value.departuretime;
    this.bookinghistory.passengers=this.viewFaresForm.value.passengers;
    this.bookinghistory.duration=this.viewFaresForm.value.duration;
    this.bookinghistory.returndate=this.viewFaresForm.value.returndate;
    this.bookinghistory.departdate=this.viewFaresForm.value.departdate;
    this.bookinghistory.bckagePrice=this.viewFaresForm.value.bckagePrice;
    this.bookinghistory.handbags=this.viewFaresForm.value.handbags;
    this.bookinghistory.checkedbags=this.viewFaresForm.value.checkedbags;
    console.log(this.bookinghistory);
  
    this.bookinghistoryservice.createBookinghistory(this.bookinghistory).subscribe(res => {
      console.log(res);
      alert("Details updated");
      let ref = document.getElementById("cancel");
      ref?.click();
      this.viewFaresForm.reset();
      this.fetchAllbookings();
  
    },
      error => {
        alert("Something went wrong");
      })
  

  }


  btnClick()
{
  alert("TICKET BOOKING WAS SUCCESSFUL. KINDLY PRESS OK TO SAVE THE DETAILS.")
 this.createdetails();
 this.createhistorydetails();
}
}







