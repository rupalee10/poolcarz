import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookride',
  templateUrl: './bookride.component.html',
  styleUrls: ['./bookride.component.css']
})
export class BookrideComponent implements OnInit {
  toggleAllRide:boolean=false;
  toggleRide:boolean=true;

  rides:Array<any>=[

    {"startPoint":"Vanrose junction","EndPoint":"Infosys","SeatsAvailable":"3"},
    {"startPoint":"PTP","EndPoint":"Infosys","SeatsAvailable":"2"},
    {"startPoint":"Infosys","EndPoint":"Pimplegurav","SeatsAvailable":"7"},
    {"startPoint":"Wipro","EndPoint":"Pune Central Mall","SeatsAvailable":"5"},
    {"startPoint":"Pimplesaudagar","EndPoint":"Infosys","SeatsAvailable":"3"}

  ];
  productRatings:any[]=[4,3,2,4,1];
  productMapping={'=4':'# -Excellent','=3':'#- Good','=2':'# -Average','other':'# -'};

  sortOption:string="";
  values = '';

  constructor() { }

  ngOnInit() {

  }

  showAll(){
    this.toggleAllRide=true;
    //this.toggleRide=false;
  }
  filterValues(event:any){
    //alert(value);
    this.values += event.target.value ;
    alert(this.values);

  }

}
