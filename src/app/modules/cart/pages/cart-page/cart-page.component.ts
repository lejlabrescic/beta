import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  head = "#cart";
  constructor(private router: Router, private dataService: DataService) {
    if (this.dataService.cartItemList.length == 0) {
      this.router.navigate(['cart/empty-cart']);
    }
  }

  ngOnInit(): void {
  }

}
