import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent implements OnInit {

  offerRideForm:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.offerRideForm =this.fb.group({
      name:['',Validators.required],
      location:['',Validators.required],
      dest:['',Validators.required],
      car:['',Validators.required],
      seats:['',Validators.required]
    })
  }

}
