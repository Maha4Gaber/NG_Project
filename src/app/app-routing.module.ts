import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { MenuComponent } from './Components/menu/menu.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { ReviewsComponent } from './Components/reviews/reviews.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ErorrComponent } from './Components/erorr/erorr.component';
import { LoginComponent } from './Components/login/login.component';
import { AddMealComponent } from './Dashbourd/add-meal/add-meal.component';
import { AddAdminComponent } from './Dashbourd/add-admin/add-admin.component';
import { UpdateMealComponent } from './Dashbourd/update-meal/update-meal.component';
import { MainComponent } from './Dashbourd/main/main.component';

const routes: Routes = [
  {    path:'',component:HomeComponent  },
  {    path:'about',component:AboutComponent  },
  {    path:'menu',component:MenuComponent  },
  {    path:'gallery',component:GalleryComponent  },
  {    path:'reviews',component:ReviewsComponent  },
  {    path:'contact',component:ContactComponent  },
  {    path:'login',component:LoginComponent  },
  {    path:'addmeal',component:AddMealComponent  },
  {    path:'addadmin',component:AddAdminComponent  },
  {    path:'updatemeal/:id',component:UpdateMealComponent},
  {    path:'dashboard',component:MainComponent  },
  {    path:'**',component:ErorrComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
