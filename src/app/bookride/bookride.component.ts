import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-bookride',
  templateUrl: './bookride.component.html',
  styleUrls: ['./bookride.component.css']
})
export class BookrideComponent implements OnInit {
  toggleAllRide:boolean=false;
  toggleRide:boolean=true;
  public selectedRow:Array<any>;
  public rideDetails:Array<any>=[
    {"id":"T101",},
    {"id":"T102",},
    {"id":"T103",},
    {"id":"T104",},
    {"id":"T105",}
  
  ];
  
  rides:Array<any>=[
    
    {"id":"T101","startPoint":"Vanrose junction","EndPoint":"Infosys","SeatsAvailable":"3","Name":"Manu","Car":"BMW X5"},
    {"id":"T102","startPoint":"PTP","EndPoint":"Infosys","SeatsAvailable":"2","Name":"Viru","Car":"Accent X5"},
    {"id":"T103","startPoint":"Infosys","EndPoint":"Pimplegurav","SeatsAvailable":"7","Name":"Ritu","Car":"Xcent F3"},
    {"id":"T104","startPoint":"Wipro","EndPoint":"Pune Central Mall","SeatsAvailable":"5","Name":"Rp","Car":"Wokswagen R3"},
    {"id":"T105","startPoint":"Pimplesaudagar","EndPoint":"Infosys","SeatsAvailable":"3","Name":"Ashish","Car":"Swift Dezire"}

  ];



  productRatings:any[]=[4,3,2,4,1];
  productMapping={'=4':'# -Excellent','=3':'#- Good','=2':'# -Average','other':'# -'};

  sortOption:string="";
  values = '';
  
  test:string="My component";
  constructor() { }

  ngOnInit() {

  }

  showAll(){
    this.toggleAllRide=true;
 }
  filterValues(event:any){
    this.values += event.target.value ;
  }

  setClickedRow = function(index){
    this.selectedRow = index;
    console.log('book',index);

}

  getValue(data){
    console.log('book',data);
  }
  onridebook(toggleAllRide:boolean){
    this.toggleAllRide=false;

  }

}
