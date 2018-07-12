import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookrideComponent } from './bookride/bookride.component';
import {RouterModule,Routes} from '@angular/router';
import { MousehoverDirective } from './mousehover.directive';
import { RideFilterPipePipe } from './ride-filter-pipe.pipe';
import {FormsModule}        from '@angular/forms';
import { RideDetailsComponent } from './ride-details/ride-details.component';
import { OfferRideComponent } from './offer-ride/offer-ride.component';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module



const appRoutes:Routes=[

  {path:'book-ride',component:BookrideComponent},
  {path:'offer-ride',component:OfferRideComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookrideComponent,
    MousehoverDirective,
    RideFilterPipePipe,
    RideDetailsComponent,
    OfferRideComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
