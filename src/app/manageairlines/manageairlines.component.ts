import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Listflights } from '../models/listflights';
import { Manageairlines } from '../models/manageairlines';
import { ListflightsService } from '../services/listflights.service';
import { ManageairlinesService } from '../services/manageairlines.service';
import { ManagebookingsService } from '../services/managebookings.service';

@Component({
  selector: 'app-manageairlines',
  templateUrl: './manageairlines.component.html',
  styleUrls: ['./manageairlines.component.css']
})
export class ManageairlinesComponent implements OnInit {



  airlinemodel: Manageairlines = new Manageairlines();
  airlinelist:Listflights=new Listflights();
  fetcheddetails: any;

  showaddd: boolean = false;
  showupdate: boolean = false;


  manageairlineFormvalidate = this.fb.group(
    {
      airlinename: ['', [Validators.required]],
      flightnumber: ['', [Validators.required]],
      contactnumber: ['', [Validators.required]],
      primarylocation: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      arrivaltime: ['', [Validators.required]],
      departuretime: ['', [Validators.required]],
      passengers:['', [Validators.required]],
      checkedbags:['', [Validators.required]],
      handbags:['', [Validators.required]],
      bckagePrice:['', [Validators.required]],
      returndate:['', [Validators.required]],
      departdate:['', [Validators.required]],
      price:['', [Validators.required]],
      duration:['', [Validators.required]],



    }
  );

  addairlineFormvalidate = this.fb.group(
    {

      airlinename: ['', [Validators.required]],
      flightnumber: ['', [Validators.required]],
      contactnumber: ['', [Validators.required]],
      primarylocation: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      arrivaltime: ['', [Validators.required]],
      departuretime: ['', [Validators.required]],
      passengers:['', [Validators.required]],
      checkedbags:['', [Validators.required]],
      handbags:['', [Validators.required]],
      bckagePrice:['', [Validators.required]],
      returndate:['', [Validators.required]],
      departdate:['', [Validators.required]],
      price:['', [Validators.required]],
      duration:['', [Validators.required]],




    }
  );


  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private router: Router,
    private manageairlineservice: ManageairlinesService,
    private modalService: NgbModal, private formBuilder: FormBuilder,
    private listflightservice :ListflightsService) {

  }

  manageairlinesForm = this.fb.group({
    admin: ['']

  });



  handleSubmit() {
    this.isSubmitted = true;
  }

  fc() {
    return this.addairlineFormvalidate.controls;
  }

  ngOnInit(): void {

    this.getallflight();


  }

  postdetails() {
    this.airlinemodel.airlinename = this.addairlineFormvalidate.value.airlinename;
    this.airlinemodel.flightnumber = this.addairlineFormvalidate.value.flightnumber;
    this.airlinemodel.contactnumber = this.addairlineFormvalidate.value.contactnumber;
    this.airlinemodel.primarylocation = this.addairlineFormvalidate.value.primarylocation;
    this.airlinemodel.destination = this.addairlineFormvalidate.value.destination;
    this.airlinemodel.arrivaltime = this.addairlineFormvalidate.value.arrivaltime;
    this.airlinemodel.departuretime = this.addairlineFormvalidate.value.departuretime;
    this.airlinemodel.price=this.addairlineFormvalidate.value.price;
    this.airlinemodel.bckagePrice=this.addairlineFormvalidate.value.bckagePrice;
    this.airlinemodel.handbags=this.addairlineFormvalidate.value.handbags;
    this.airlinemodel.returndate=this.addairlineFormvalidate.value.returndate;
    this.airlinemodel.departdate=this.addairlineFormvalidate.value.departdate;
    this.airlinemodel.checkedbags=this.addairlineFormvalidate.value.checkedbags;
    this.airlinemodel.passengers=this.addairlineFormvalidate.value.passengers;
    this.airlinemodel.duration=this.addairlineFormvalidate.value.duration;
    this.manageairlineservice.createAirline(this.airlinemodel).subscribe(res => {
      console.log(res);
      alert("Details added");
      let ref = document.getElementById("cancel");
      ref?.click();
      this.addairlineFormvalidate.reset();
      this.getallflight();

    },
      error => {
        alert("Something went wrong");
      })

  }

  postdetailstoflightlist() {
    this.airlinelist.flightnames = this.addairlineFormvalidate.value.airlinename;
    this.airlinelist.flightnumber = this.addairlineFormvalidate.value.flightnumber;
    this.airlinelist.contactnumber = this.addairlineFormvalidate.value.contactnumber;
    this.airlinelist.departfrom = this.addairlineFormvalidate.value.primarylocation;
    this.airlinelist.gotolocation = this.addairlineFormvalidate.value.destination;
    this.airlinelist.arrivaltime = this.addairlineFormvalidate.value.arrivaltime;
    this.airlinelist.departuretime = this.addairlineFormvalidate.value.departuretime;
    this.airlinelist.passengers=this.addairlineFormvalidate.value.passengers;
    this.airlinelist.handbags=this.addairlineFormvalidate.value.handbags;
    this.airlinelist.checkedbags=this.addairlineFormvalidate.value.checkedbags;
    this.airlinelist.price=this.addairlineFormvalidate.value.price;
    this.airlinelist.bckagePrice=this.addairlineFormvalidate.value.bckagePrice;
    this.airlinelist.duration=this.addairlineFormvalidate.value.duration;
    this.airlinelist.returndate=this.addairlineFormvalidate.value.returndate;
    this.airlinelist.departdate=this.addairlineFormvalidate.value.departdate;
   
    console.log(this.airlinelist);
    this.listflightservice.createFlight(this.airlinelist).subscribe(res => {
      console.log(res);
      alert("Details added");
      let ref = document.getElementById("cancel");
      ref?.click();
      this.addairlineFormvalidate.reset();
      this.getallflight();

    },
      error => {
        alert("Something went wrong");
      })

  }



  getallflight() {
    this.manageairlineservice.fetchAirlines().subscribe(res => {
      this.fetcheddetails = res;
    })
  }

  deleteflightdata(listb: any) {
    this.manageairlineservice.deleteairlinesbyId(listb.id).subscribe(res => {
      alert("Blocked succesfully");
      this.getallflight();
    })




  }

  // cancelbookings(id:number){
  //   console.log(id)
  //   this.managebookingservice.deletebookings(id).subscribe((res:any)=>{
  //     console.log(res);
  //     this.fetchAllmanagebookings();
  //   })
  // }

  putdetails(listb: any) {
    this.showaddd = false;
    this.showupdate = true;
    this.airlinemodel.id = listb.id;
   
    this.addairlineFormvalidate.controls['airlinename'].setValue(listb.airlinename);
    this.addairlineFormvalidate.controls['flightnumber'].setValue(listb.flightnumber);
    this.addairlineFormvalidate.controls['contactnumber'].setValue(listb.contactnumber);
    this.addairlineFormvalidate.controls['primarylocation'].setValue(listb.primarylocation);
    this.addairlineFormvalidate.controls['destination'].setValue(listb.destination);
    this.addairlineFormvalidate.controls['arrivaltime'].setValue(listb.arrivaltime);
    this.addairlineFormvalidate.controls['departuretime'].setValue(listb.departuretime);
    this.addairlineFormvalidate.controls['duration'].setValue(listb.duration);
    this.addairlineFormvalidate.controls['price'].setValue(listb.price);
    this.addairlineFormvalidate.controls['checkedbags'].setValue(listb.checkedbags);
    this.addairlineFormvalidate.controls['bckagePrice'].setValue(listb.bckagePrice);
    this.addairlineFormvalidate.controls['returndate'].setValue(listb.returndate);
    this.addairlineFormvalidate.controls['departdate'].setValue(listb.departdate);
    this.addairlineFormvalidate.controls['handbags'].setValue(listb.handbags);
    this.addairlineFormvalidate.controls['passengers'].setValue(listb.passengers);

  }

  updatedetails() {

    this.airlinemodel.airlinename = this.addairlineFormvalidate.value.airlinename;
    this.airlinemodel.flightnumber = this.addairlineFormvalidate.value.flightnumber;
    this.airlinemodel.contactnumber = this.addairlineFormvalidate.value.contactnumber;
    this.airlinemodel.primarylocation = this.addairlineFormvalidate.value.primarylocation;
    this.airlinemodel.destination = this.addairlineFormvalidate.value.destination;
    this.airlinemodel.arrivaltime = this.addairlineFormvalidate.value.arrivaltime;
    this.airlinemodel.departuretime = this.addairlineFormvalidate.value.departuretime;
    this.airlinemodel.checkedbags=this.addairlineFormvalidate.value.checkedbags;
    this.airlinemodel.handbags=this.addairlineFormvalidate.value.handbags;
    this.airlinemodel.price=this.addairlineFormvalidate.value.price;
    this.airlinemodel.bckagePrice=this.addairlineFormvalidate.value.bckagePrice;
    this.airlinemodel.departdate=this.addairlineFormvalidate.value.departdate;
    this.airlinemodel.returndate=this.addairlineFormvalidate.value.returndate;
    this.airlinemodel.passengers=this.addairlineFormvalidate.value.passengers;
    this.airlinemodel.duration=this.addairlineFormvalidate.value.duration;


    this.manageairlineservice.updateairelinebyId(this.airlinemodel, this.airlinemodel.id).subscribe(res => {
      alert("updated successfuly")
      let ref = document.getElementById("cancel");
      ref?.click();
      this.addairlineFormvalidate.reset();
      this.getallflight();
      console.log(this.airlinemodel.id);
    })

  }

  clickAddButton() {
    this.addairlineFormvalidate.reset();
    this.showaddd = true;
    this.showupdate = false;

  }


}
