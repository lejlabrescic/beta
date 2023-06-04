import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeModule } from './modules/home/home.module';
import { ShopModule } from './modules/shop/shop.module';
import { CartModule } from './modules/cart/cart.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WishlistModule } from './modules/wishlist/wishlist.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NewArrivalsComponent,
    SignupComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ShopModule,
    CartModule,
    FormsModule,
    WishlistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
