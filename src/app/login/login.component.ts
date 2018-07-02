import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAuthenticated:boolean;
  submitted:boolean=false;
  userName:string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(user:string,pass:string){
    if(user=='admin' && pass=='admin'){
      this.userName =user;
      console.log('login successful');
      this.isAuthenticated=true;
      this.submitted=true;
      this.router.navigate(['book-ride']);

    }
    else{
      console.log('invalid login');
      this.isAuthenticated=false;
      //this.submitted=false;
    }

  }

}
