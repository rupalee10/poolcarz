import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookrideComponent } from './bookride/bookride.component';
import {RouterModule,Routes} from '@angular/router';
import { MousehoverDirective } from './mousehover.directive';
import { RideFilterPipePipe } from './ride-filter-pipe.pipe';
import {FormsModule}        from '@angular/forms';


const appRoutes:Routes=[

  {path:'book-ride',component:BookrideComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookrideComponent,
    MousehoverDirective,
    RideFilterPipePipe
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
