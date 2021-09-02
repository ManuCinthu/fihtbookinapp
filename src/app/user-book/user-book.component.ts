import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListflightsService } from '../services/listflights.service';

import { ManageairlinesService } from '../services/manageairlines.service';

@Component({
  selector: 'app-user-book',
  templateUrl: './user-book.component.html',
  styleUrls: ['./user-book.component.css']
})
export class UserBookComponent implements OnInit {
 

 isSubmitted: boolean= false;
  constructor(private fb: FormBuilder,private router : Router,private listflightservice: ListflightsService) { }


  bookingFormvalidate= this.fb.group(
    {
      originId: ['',[Validators.required]],
      destinationId:['',[Validators.required]],
      adultIdId:['',[Validators.required]],
      childrenId:['',[Validators.required]],
      fromdateId:['',[Validators.required]],
      returndateId:['',[Validators.required]]
    }
  );


  handleSubmit(){
    this.isSubmitted = true;
  }

  fc(){
    return this.bookingFormvalidate.controls;
  }

  
  btnClick() {
    this.router.navigateByUrl("/searchresultId");
};



  

  ngOnInit(): void {
    
  }

}
