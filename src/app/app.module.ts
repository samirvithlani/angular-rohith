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
    DoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
