import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { AboutComponent } from './Components/about/about.component';
import { MenuComponent } from './Components/menu/menu.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { ReviewsComponent } from './Components/reviews/reviews.component';
import { ContactComponent } from './Components/contact/contact.component';
import { MainComponent } from './Dashbourd/main/main.component';
import { AddMealComponent } from './Dashbourd/add-meal/add-meal.component';
import { AddAdminComponent } from './Dashbourd/add-admin/add-admin.component';
import { UsersComponent } from './Dashbourd/users/users.component';
import { OrdersComponent } from './Dashbourd/orders/orders.component';
import { FooterComponent } from './Components/footer/footer.component';
import { OrderComponent } from './Components/order/order.component';
import { LoginComponent } from './Components/login/login.component';
import { ErorrComponent } from './Components/erorr/erorr.component';
import { UpdateMealComponent } from './Dashbourd/update-meal/update-meal.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AboutComponent,
    MenuComponent,
    GalleryComponent,
    ReviewsComponent,
    ContactComponent,
    MainComponent,
    AddMealComponent,
    AddAdminComponent,
    UsersComponent,
    OrdersComponent,
    FooterComponent,
    OrderComponent,
    LoginComponent,
    ErorrComponent,
    UpdateMealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
