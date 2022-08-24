import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailComponent } from './detail/detail.component';
import { MoviebarComponent } from './moviebar/moviebar.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { DoctorComponent } from './doctor/doctor.component';
import {HttpClientModule} from '@angular/common/http';
import { DocComponent } from './doc/doc.component';
import { DocdetailComponent } from './docdetail/docdetail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './forms/employee/employee.component';
import { LocationComponent } from './dropdown/location/location.component';
import { ClinicComponent } from './clinic/clinic.component';
import { AdddoctorComponent } from './crud/adddoctor/adddoctor.component';
import { DoctorlistComponent } from './crud/doctorlist/doctorlist.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EditdoctorComponent } from './crud/editdoctor/editdoctor.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { TempConvertPipe } from './temp-convert.pipe';
import { TestcustomepipeComponent } from './testcustomepipe/testcustomepipe.component';
import { IndexComponent } from './index/index.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { LoginserviceComponent } from './loginservice/loginservice.component';
import { AuthenticationGuard } from './authentication.guard';
import { MaterialdemoComponent } from './materialdemo/materialdemo.component';
import { RouterdemoComponent } from './routerdemo/routerdemo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MatComponent } from './mat/mat.component';
import { Home1Component } from './home1/home1.component';
import { Header1Component } from './header1/header1.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { ChildComponent } from './child/child.component';
import { GoogleComponent } from './google/google.component';
import { YoutubeComponent } from './youtube/youtube.component';


 






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ContactusComponent,
    BlogsComponent,
    NotfoundComponent,
    DetailComponent,
    MoviebarComponent,
    MoviesComponent,
    SeriesComponent,
    MoviedetailComponent,
    DoctorComponent,
    DocComponent,
    DocdetailComponent,
    EmployeeComponent,
    LocationComponent,
    ClinicComponent,
    AdddoctorComponent,
    DoctorlistComponent,
    EditdoctorComponent,
    PipedemoComponent,
    TempConvertPipe,
    TestcustomepipeComponent,
    IndexComponent,
    UserloginComponent,
    LoginserviceComponent,
    MaterialdemoComponent,
    RouterdemoComponent,
    PagenotfoundComponent,
    
    Home1Component,
    Header1Component,
    LeftsidebarComponent,
    ChildComponent,
    GoogleComponent,
    YoutubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    

    
    
  ],
  
  providers: [
    AuthenticationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
