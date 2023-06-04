import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { WishlistPageComponent } from './pages/wishlist-page/wishlist-page/wishlist-page.component';
import { WishlistTableComponent } from './components/wishlist-table/wishlist-table/wishlist-table.component';
import { FormsModule } from '@angular/forms';
import { EmptyWishlistComponent } from './pages/empty-wishlist/empty-wishlist/empty-wishlist.component';
const routes: Routes = [
  {
    path: '',
    component: WishlistPageComponent,
  },
  { path: 'wishlist/empty-wishlist', component: EmptyWishlistComponent },
];

@NgModule({
  declarations: [
   
    WishlistPageComponent, 
    WishlistTableComponent,
    EmptyWishlistComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule
  ]
})
export class WishlistModule { }
