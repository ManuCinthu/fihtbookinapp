import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// import html2canvas from 'html2canvas';

// import * as pdfMake from "pdfmake/build/pdfmake";

import { Managebooking } from '../models/managebooking';
import { ManagebookingsService } from '../services/managebookings.service';



@Component({
  selector: 'app-manage-booking',
  templateUrl: './manage-booking.component.html',
  styleUrls: ['./manage-booking.component.css']
})
export class ManageBookingComponent implements OnInit {
  private readonly pdfFonts: any;
  pdfMake: any;
  

   managebookinglist:any;
   managebookingmodal: Managebooking = new Managebooking();
  documentEditor: any;
 
  // pdfTable: any;


  
  constructor(private fb:FormBuilder,private managebookingservice:ManagebookingsService,
    private modalService: NgbModal,
        ) { 
        //   this.pdfMake = require('pdfmake/build/pdfmake.js'),
        // this.pdfFonts = require('pdfmake/build/vfs_fonts.js'),
        // this.pdfMake.vfs = this.pdfFonts.pdfMake.vfs
      }
    

 managebookingForm=this.fb.group({
    managebookingId:[''],
    flightnames:['', [Validators.required]],
    flightnumber:['', [Validators.required]],
    departfrom:['', [Validators.required]],
    gotolocation:['', [Validators.required]],
    arrivaltime:['', [Validators.required]],
    departuretime:['', [Validators.required]],
    price:['', [Validators.required]],
    passengers:['', [Validators.required]],
    duration:['', [Validators.required]],
    returndate:['', [Validators.required]],
    departdate:['', [Validators.required]],
    bckagePrice:['', [Validators.required]],
    Checkedbags:['', [Validators.required]],
    Handbags:['', [Validators.required]],

  });

  viewmanagebookingForm=this.fb.group({
    // managebookingId:[''],
    flightnames:['', [Validators.required]],
    flightnumber:['', [Validators.required]],
    departfrom:['', [Validators.required]],
    gotolocation:['', [Validators.required]],
    arrivaltime:['', [Validators.required]],
    departuretime:['', [Validators.required]],
    price:['', [Validators.required]],
    passengers:['', [Validators.required]],
    duration:['', [Validators.required]],
    returndate:['', [Validators.required]],
    departdate:['', [Validators.required]],
    bckagePrice:['', [Validators.required]],
    checkedbags:['', [Validators.required]],
    handbags:['', [Validators.required]],

  });



  isSubmitted: boolean = false;
  

  ngOnInit(): void {
    this.fetchAllmanagebookings();

   
  }


  fetchAllmanagebookings(){
    this.managebookingservice.fetchmanagebookings().subscribe((res:any)=>{
      console.log(res);
      this.managebookingmodal = res;
      this.managebookinglist=res;
      
      console.log("after req sent...")
    });   
  }



  cancelbookings(id:number){
    console.log(id)
    this.managebookingservice.deletebookings(id).subscribe((res:any)=>{
      console.log(res);
      this.fetchAllmanagebookings();
    })
  }

  handleSubmit() {
    this.isSubmitted = true;
  }

  fc() {
    return this.viewmanagebookingForm.controls;
  }


  postdetails() {
    this.managebookingmodal.flightnames = this.viewmanagebookingForm.value.flightnames;
    this.managebookingmodal.flightnumber = this.viewmanagebookingForm.value.flightnumber;
    this.managebookingmodal.departfrom = this.viewmanagebookingForm.value.departfrom;
    this.managebookingmodal.gotolocation = this.viewmanagebookingForm.value.gotolocation;
    this.managebookingmodal.arrivaltime = this.viewmanagebookingForm.value.arrivaltime;
    this.managebookingmodal.departuretime = this.viewmanagebookingForm.value.departuretime;
    this.managebookingmodal.price = this.viewmanagebookingForm.value.price;
    this.managebookingmodal.passengers = this.viewmanagebookingForm.value.passengers;
    this.managebookingmodal.duration = this.viewmanagebookingForm.value.duration;
    this.managebookingmodal.returndate = this.viewmanagebookingForm.value.returndate;
    this.managebookingmodal.departdate = this.viewmanagebookingForm.value.departdate;
    this.managebookingmodal.bckagePrice = this.viewmanagebookingForm.value.bckagePrice;
    this.managebookingmodal.checkedbags = this.viewmanagebookingForm.value.checkedbags;
    this.managebookingmodal.handbags = this.viewmanagebookingForm.value.handbags;


    this.managebookingservice.createbookings(this.managebookingmodal).subscribe(res => {
      console.log(res);
      alert("Details added");
      let ref = document.getElementById("cancel");
      ref?.click();
      this.managebookingForm.reset();
      this.fetchAllmanagebookings();

    },
      _error => {
        alert("Something went wrong");
      })

  }


  putdetails(listb: any) {
   
    this.managebookingmodal.id = listb.id;
    this.viewmanagebookingForm.controls['flightnames'].setValue(listb.flightnames);
    this.viewmanagebookingForm.controls['flightnumber'].setValue(listb.flightnumber);
    this.viewmanagebookingForm.controls['departfrom'].setValue(listb.departfrom);
    this.viewmanagebookingForm.controls['gotolocation'].setValue(listb.gotolocation);
    this.viewmanagebookingForm.controls['arrivaltime'].setValue(listb.arrivaltime);
    this.viewmanagebookingForm.controls['departuretime'].setValue(listb.departuretime);
    this.viewmanagebookingForm.controls['passengers'].setValue(listb.passengers);
    this.viewmanagebookingForm.controls['duration'].setValue(listb.duration);
    this.viewmanagebookingForm.controls['returndate'].setValue(listb.returndate);
    this.viewmanagebookingForm.controls['departdate'].setValue(listb.departdate);
    this.viewmanagebookingForm.controls['bckagePrice'].setValue(listb.bckagePrice);
    this.viewmanagebookingForm.controls['checkedbags'].setValue(listb.checkedbags);
    this.viewmanagebookingForm.controls['handbags'].setValue(listb.handbags);
   
  }

  updatedetails() {

    this.managebookingmodal.flightnames = this.viewmanagebookingForm.value.flightnames;
    this.managebookingmodal.flightnumber = this.viewmanagebookingForm.value.flightnumber;
    this.managebookingmodal.departfrom = this.viewmanagebookingForm.value.departfrom;
    this.managebookingmodal.gotolocation = this.viewmanagebookingForm.value.gotolocation;
    this.managebookingmodal.arrivaltime = this.viewmanagebookingForm.value.arrivaltime;
    this.managebookingmodal.passengers = this.viewmanagebookingForm.value.passengers;
    this.managebookingmodal.departuretime = this.viewmanagebookingForm.value.departuretime;
    this.managebookingmodal.duration = this.viewmanagebookingForm.value.duration;
    this.managebookingmodal.returndate = this.viewmanagebookingForm.value.returndate;
    this.managebookingmodal.departdate = this.viewmanagebookingForm.value.departdate;
    this.managebookingmodal.bckagePrice = this.viewmanagebookingForm.value.bckagePrice;
    this.managebookingmodal.checkedbags = this.viewmanagebookingForm.value.checkedbags;
    this.managebookingmodal.handbags = this.viewmanagebookingForm.value.handbags;



    this.managebookingservice.updatebookingbyId(this.managebookingmodal, this.managebookingmodal.id).subscribe(_res => {
      alert("updated successfuly")
      let ref = document.getElementById("cancel");
      ref?.click();
      this.managebookingForm.reset();
      this.fetchAllmanagebookings();
      console.log(this.managebookingmodal.id);
    })

  }
 


  public onPrint() :void {
    this.documentEditor.print();
}

//   downloaddetails(listb:any){
//   let data = document.getElementById('htmltable');
//     html2canvas(data).then(canvas => {
          
//       let docWidth = 208;
//       let docHeight = canvas.height * docWidth / canvas.width;
      
//       const contentDataURL = canvas.toDataURL('image/png')
//       let doc = new jsPDF('p', 'mm', 'a4');
//       let position = 0;
//       doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)
      
//       doc.save('exportedPdf.pdf');
//   });
// }
   
    // this.managebookingmodal.id = listb.id;
    // this.viewmanagebookingForm.controls['flightnames'].setValue(listb.flightnames);
    // this.viewmanagebookingForm.controls['flightnumber'].setValue(listb.flightnumber);
    // this.viewmanagebookingForm.controls['departfrom'].setValue(listb.departfrom);
    // this.viewmanagebookingForm.controls['gotolocation'].setValue(listb.gotolocation);
    // this.viewmanagebookingForm.controls['arrivaltime'].setValue(listb.arrivaltime);
    // this.viewmanagebookingForm.controls['departuretime'].setValue(listb.departuretime);
    // this.viewmanagebookingForm.controls['passengers'].setValue(listb.passengers);
    // this.viewmanagebookingForm.controls['duration'].setValue(listb.duration);
    // this.viewmanagebookingForm.controls['returndate'].setValue(listb.returndate);
    // this.viewmanagebookingForm.controls['departdate'].setValue(listb.departdate);
    // this.viewmanagebookingForm.controls['bckagePrice'].setValue(listb.bckagePrice);
    // this.viewmanagebookingForm.controls['checkedbags'].setValue(listb.checkedbags);
    // this.viewmanagebookingForm.controls['handbags'].setValue(listb.handbags);
   
  }


// generatePdf(){
//   const documentDefinition = { content: "Mypdf" };
//   pdfMake.createPdf(documentDefinition).open();
//  }











