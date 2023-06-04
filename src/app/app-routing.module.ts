import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactPageComponent } from './modules/contact/pages/contact-page/contact-page.component';
import { WishlistModule } from './modules/wishlist/wishlist.module';
const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {path : 'login',
  component : LoginComponent
},
{
  path : 'signup', 
  component : SignupComponent

}
,{
  path : 'contact', 
  component : ContactPageComponent

},



  {
    path: 'shop',
    loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule)
  },
 
 
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./modules/wishlist/wishlist.module').then(m => m.WishlistModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
