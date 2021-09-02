import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addairlines',
  templateUrl: './addairlines.component.html',
  styleUrls: ['./addairlines.component.css']
})
export class AddairlinesComponent implements OnInit {
  airlineFormvalidate= this.fb.group(
    {
      airlinename: ['',[Validators.required]],
      // logoname:['',[Validators.required]],
      contactnumber:['',[Validators.required]],
      address:['',[Validators.required]],
      
    }
  );
  isSubmitted: boolean=false;

  constructor(private fb: FormBuilder,private router : Router) { }
  airlineForm=this.fb.group({
    admin:['']

  });


  handleSubmit(){
    this.isSubmitted = true;
  }

  fc(){
    return this.airlineFormvalidate.controls;
  }

  btnClick() {
    this.router.navigateByUrl('/home');
};


// addEvent(data: any): void {
//   console.log(data);
//   this._airlineService.postAirlines(data).subscribe(res => {
//     console.log(res);
//     if (res) {
//       this._airlineService.getAllAirlines().subscribe(result => {
//         this.airlines = result;
       
//       }, error => {
//         this.errorMessage = error.message;
//         console.log(`Error Message::${this.errorMessage}`);
//       });

//     }

//   }, error => {
//     this.errorMessage = error.message;
//     console.log(`Error Message::${this.errorMessage}`);
//   });
// }

  ngOnInit(): void {
  }

}
