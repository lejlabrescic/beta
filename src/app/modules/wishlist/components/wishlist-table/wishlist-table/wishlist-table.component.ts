import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-wishlist-table',
  templateUrl: './wishlist-table.component.html',
  styleUrls: ['./wishlist-table.component.scss']
})
export class WishlistTableComponent {
  @ViewChild('tbody') tbody!: ElementRef;
  
  // ------
  public products : any = [];
  public grandTotal !: number;

  constructor(private dataService: DataService, private router: Router) {}
  // Get Products
  ngOnInit(): void {
    this.dataService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.dataService.getTotalPrice();
    });
  }
  // remove Items from Table
  removeItem(item: any) {
    this.dataService.removeCartItem(item);
    // Component Cart Total Value Changing
    
  }
  // UpDate Subtotal
  public changeTotal(item: any) {
    // var input = event.target;
    if (isNaN(item.quantity) || item.quantity <= 0) {
      item.quantity = 1;
    }
    // var priceElement = input.parentElement.previousSibling.innerText;
    var price = parseFloat(item.price.replace("$", ""));
    var total = 0;
    total = total + price * item.quantity;
    // if price contain some cents value
    total = Math.round(total * 100) / 100;
    // return Subtotal in HTML
    item.total = total;
    // General Total
    this.grandTotal = 0;
    this.dataService.cartItemList.map((a:any)=>{
      this.grandTotal += ( parseFloat(a.price.replace("$", "")) * a.quantity);
    })
    // Component Cart Total Value Changing
    
    return this.grandTotal;
  }

  heads: any[] = [
    {
      title: 'Remove',
    },
    {
      title: 'Image',
    },
    {
      title: 'Product',
    },
    {
      title: 'Price',
    }
    
  ]

}

