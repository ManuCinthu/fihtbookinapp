import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Manageschedule } from '../models/manageschedule';
import { ManagescheduleService } from '../services/manageschedule.service';

@Component({
  selector: 'app-manageschedule',
  templateUrl: './manageschedule.component.html',
  styleUrls: ['./manageschedule.component.css']
})
export class ManagescheduleComponent implements OnInit {

  manageschedulemodel:Manageschedule=new Manageschedule();
 
  schedulelist:any;
  showaddd: boolean = false;
  showupdate: boolean = false;

  managescheduleform= this.fb.group(
    {
     
    flightnumber:['',[Validators.required]],
    flightnames: ['', Validators.required],
    fromlocation: ['', Validators.required],
    tolocation: ['', [Validators.required]],
    startdate: ['', [Validators.required]],
    enddate: ['', [Validators.required]],
    scheduleddays: ['0', [Validators.required]],
    instrument: ['0', [Validators.required]],
    price:['0',[Validators.required]]

     
    }
  );


  addscheduleform = this.fb.group({
    flightnumber: ['', Validators.required],
    flightnames: ['0', Validators.required],
    fromlocation: ['', Validators.required],
    tolocation: ['', [Validators.required]],
    startdate: ['', [Validators.required]],
    enddate: ['', [Validators.required]],
    scheduleddays: ['0', [Validators.required]],
    instrument: ['0', [Validators.required]],
    price:['0',[Validators.required]]
  }
  );

  isSubmitted: boolean=false;

  constructor(private fb: FormBuilder,private router : Router,
    private managescheduleservice:ManagescheduleService,
    private modalService:NgbModal) { }

  
   handleSubmit(){
    this.isSubmitted = true;
  }


  fc(){
    return this.addscheduleform.controls;
  }

  ngOnInit(): void {
  

    this.fetchAllSchedules();
    
  }


fetchAllSchedules(){
  this.managescheduleservice.fetchSchedules().subscribe((res:any)=>{
    console.log(res);
    this.schedulelist = res;
    console.log("after req sent...")
  });   
}


fetchschedulebyId(id:number){
  console.log(id)
  this.managescheduleservice.fetchscheduleById(id).subscribe((res:any)=>{
    console.log(res);
    this.fetchAllSchedules();
  })
}


deleteschedule(id:number){
  console.log(id)
  this.managescheduleservice.deletescheduleById(id).subscribe((res:any)=>{
    console.log(res);
    this.fetchAllSchedules();
  })
}


postdetails() {
  this.manageschedulemodel.flightnames = this.addscheduleform.value.flightnames;
  this.manageschedulemodel.flightnumber = this.addscheduleform.value.flightnumber;
  this.manageschedulemodel.fromlocation = this.addscheduleform.value.fromlocation;
  this.manageschedulemodel.tolocation = this.addscheduleform.value.tolocation;
  this.manageschedulemodel.scheduleddays = this.addscheduleform.value.scheduleddays;
  this.manageschedulemodel.startdate = this.addscheduleform.value.startdate;
  this.manageschedulemodel.enddate = this.addscheduleform.value.enddate;
  this.manageschedulemodel.instrument = this.addscheduleform.value.instrument;
  this.manageschedulemodel.price = this.addscheduleform.value.price;
  this.managescheduleservice.createschedule(this.manageschedulemodel).subscribe(res => {
    console.log(res);
    alert("Details added");
    let ref = document.getElementById("cancel");
    ref?.click();
    this.addscheduleform.reset();
    this.fetchAllSchedules();

  },
    error => {
      alert("Something went wrong");
    })

}

putdetails(listb: any) {
  this.showaddd = false;
  this.showupdate = true;
  this.manageschedulemodel.id = listb.id;
  this.addscheduleform.controls['flightnames'].setValue(listb.flightnames);
  this.addscheduleform.controls['flightnumber'].setValue(listb.flightnumber);
  this.addscheduleform.controls['tolocation'].setValue(listb.tolocation);
  this.addscheduleform.controls['fromlocation'].setValue(listb.fromlocation);
  this.addscheduleform.controls['startdate'].setValue(listb.startdate);
  this.addscheduleform.controls['enddate'].setValue(listb.enddate);
  this.addscheduleform.controls['scheduleddays'].setValue(listb.scheduleddays);
  this.addscheduleform.controls['instrument'].setValue(listb.instrument);
  this.addscheduleform.controls['price'].setValue(listb.price);
}

updatedetails() {

  this.manageschedulemodel.flightnames = this.addscheduleform.value.flightnames;
  this.manageschedulemodel.flightnumber = this.addscheduleform.value.flightnumber;
  this.manageschedulemodel.tolocation = this.addscheduleform.value.tolocation;
  this.manageschedulemodel.fromlocation = this.addscheduleform.value.fromlocation;
  this.manageschedulemodel.startdate = this.addscheduleform.value.startdate;
  this.manageschedulemodel.enddate = this.addscheduleform.value.enddate;
  this.manageschedulemodel.scheduleddays = this.addscheduleform.value.scheduleddays;
  this.manageschedulemodel.instrument = this.addscheduleform.value.instrument;
  this.manageschedulemodel.price = this.addscheduleform.value.price;
  
  this.managescheduleservice.updateschedulebyId(this.manageschedulemodel, this.manageschedulemodel.id).subscribe(res => {
    alert("updated successfuly")
    let ref = document.getElementById("cancel");
    ref?.click();
    this.addscheduleform.reset();
    this.fetchAllSchedules();
    console.log(this.manageschedulemodel.id);
  })

}

clickAddButton() {
  this.addscheduleform.reset();
  this.showaddd = true;
  this.showupdate = false;

}


  

}
