import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent  implements OnInit {
 @Input() RideData:Array<any> ;
 public rideDetails;
 public myObjStr;
 bookId:boolean=false;
 enabled:boolean=true;
 public buttonValue='Book';

 @Output() bookValue=new EventEmitter<boolean>();

 

 public bookRideValue:string;
 ngOnInit(): void {  
      if (this.RideData instanceof Array) {
          this.RideData = this.RideData;
      } else {
          this.RideData = [this.RideData];
      }

} 

  constructor() { 
    console.log('bookkkk',this.bookRideValue);   
  }

  bookRide(event){

     this.myObjStr = JSON.stringify(event.id);
     this.bookId=true;
     this.enabled=false;
    //this.bookValue=false;
     this.bookValue.emit(false);

     this.buttonValue='cancel';

   // alert(myObjStr);
   //console.log('bookid',myObjStr);
  }

}
