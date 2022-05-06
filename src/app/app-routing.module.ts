import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EditdoctorComponent } from './crud/editdoctor/editdoctor.component';
import { DetailComponent } from './detail/detail.component';
import { DocdetailComponent } from './docdetail/docdetail.component';
import { HomeComponent } from './home/home.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SeriesComponent } from './series/series.component';


const routes: Routes = [

  // {
  //   path: '', component: HomeComponent
  // },
  {
    path: 'aboutus', component: AboutusComponent
  },
  {
    path: 'contactus', component: ContactusComponent
  },
  {
    path: 'blogs', component: BlogsComponent,
  }, {
    path: '*', component: NotfoundComponent
  },
 {
   path:"details/:uuid",component:DetailComponent
 },
 {
   path:'movies',component:MoviesComponent
 },
 {
   path:'series',component:SeriesComponent
 },
 {
   path:'movie/:id',component:MoviedetailComponent
 },
 {
    path:'docdetail/:id',component:DocdetailComponent
 },
 {
   path:'editdoctor/:id',component:EditdoctorComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
