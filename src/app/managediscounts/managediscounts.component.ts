import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Discounts } from '../models/discounts';
import { DiscountsService } from '../services/discounts.service';

@Component({
  selector: 'app-managediscounts',
  templateUrl: './managediscounts.component.html',
  styleUrls: ['./managediscounts.component.css']
})
export class ManagediscountsComponent implements OnInit {

  
  discountsmodel:Discounts=new Discounts();
  discountlist: any;


  showaddd: boolean = false;
  showupdate: boolean = false;

  managediscountform= this.fb.group(
    {
     
    id:['',[Validators.required]],
    coupouncode: ['', Validators.required],
    discountamount: ['', Validators.required],
    totalamount: ['', [Validators.required]],
   
     
    }
  );

  adddiscountform= this.fb.group(
    {
     
    id:['',[Validators.required]],
    coupouncode: ['', Validators.required],
    discountamount: ['', Validators.required],
    totalamount: ['', [Validators.required]],
   
     
    }
  );


  isSubmitted: boolean=false;
  constructor(private fb: FormBuilder,private router : Router,
    private managediscount:DiscountsService,) { }


    handleSubmit(){
      this.isSubmitted = true;
    }
  
  
    fc(){
      return this.adddiscountform.controls;
    }
  ngOnInit(): void {
    this.fetchAllDiscounts();
  }




  fetchAllDiscounts(){
    this.managediscount.fetchDiscounts().subscribe((res:any)=>{
      console.log(res);
      this.discountlist = res;
      console.log("after req sent...")
    });   
  }
  
  
  fetchdiscountsbyId(id:number){
    console.log(id)
    this.managediscount.fetchDiscountsById(id).subscribe((res:any)=>{
      console.log(res);
      this.fetchAllDiscounts();
    })
  }
  
  
  deletediscounts(id:number){
    console.log(id)
    this.managediscount.removediscounts(id).subscribe((res:any)=>{
      console.log(res);
      this.fetchAllDiscounts();
    })
  }
  
  
  postdetails() {
    this.discountsmodel.discountamount = this.adddiscountform.value.discountamount;
    this.discountsmodel.coupouncode = this.adddiscountform.value.coupouncode;
    this.discountsmodel.totalamount = this.adddiscountform.value.totalamount;
    
    this.managediscount.createDiscount(this.discountsmodel).subscribe(res => {
      console.log(res);
      alert("Details added");
      let ref = document.getElementById("cancel");
      ref?.click();
      this.adddiscountform.reset();
      this.fetchAllDiscounts();
  
    },
      error => {
        alert("Something went wrong");
      })
  
  }
  
  putdetails(listb: any) {
    this.showaddd = false;
    this.showupdate = true;
    this.discountsmodel.id = listb.id;
    this.adddiscountform.controls['discountamount'].setValue(listb.discountamount);
    this.adddiscountform.controls['coupouncode'].setValue(listb.coupouncode);
    this.adddiscountform.controls['totalamount'].setValue(listb.totalamount);
   
  }
  
  updatedetails() {
  
    this.discountsmodel.discountamount = this.adddiscountform.value.discountamount;
    this.discountsmodel.totalamount = this.adddiscountform.value.totalamount;
    this.discountsmodel.coupouncode = this.adddiscountform.value.coupouncode;
    
    this.managediscount.updateDiscounts(this.discountsmodel.id,this.discountsmodel, ).subscribe(res => {
      alert("updated successfuly")
      let ref = document.getElementById("cancel");
      ref?.click();
      this.adddiscountform.reset();
      this.fetchAllDiscounts();
      console.log(this.discountsmodel.id);
    })
  
  }
  
  clickAddButton() {
    this.adddiscountform.reset();
    this.showaddd = true;
    this.showupdate = false;
  
  }
}
