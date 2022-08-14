import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routing';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { PagetwoComponent } from './components/pagetwo/pagetwo.component';
import { BreakingService } from './servicios/breaking.service';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    PagetwoComponent,
 
  
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    HttpClientModule
    
  ],
  providers: [BreakingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
