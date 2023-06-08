import { Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent{
  @ViewChild('mainImg') mainImg!: ElementRef;
  @Output() addProd = new EventEmitter();
  titleProd!:any;
  priceProd!:any;
  imgSrc!:any;
  valInput:number = 1;
  alertMassage:boolean = false;
  constructor(private router: Router, private dataService: DataService) {}
  ngOnInit(): void {
    this.titleProd = window.localStorage.getItem("Product Title");
    this.priceProd = window.localStorage.getItem("Product Price");
    this.imgSrc = window.localStorage.getItem("Product Img");
  }
  addCart(item: any) {
    this.router.navigate(['/cart']);
    var product : any = {
      title: this.titleProd,
      price: this.priceProd,
      img: this.imgSrc,
      quantity: Number(this.valInput),
      total: parseFloat(this.priceProd.replace("$", "")) * Number(this.valInput),
    }
    for (let i = 0; i < this.dataService.cartItemList.length; i++) {
      if (product.title == this.dataService.cartItemList[i].title) {
        this.dataService.removeCartItem(product);
      }
    }
    this.dataService.addCart(product);
  }
  addWishlist(item: any) {
    this.router.navigate(['/wishlist']);
    var product : any = {
      title: this.titleProd,
      price: this.priceProd,
      img: this.imgSrc,
      quantity: Number(this.valInput),
      total: parseFloat(this.priceProd.replace("$", "")) * Number(this.valInput),
    }
    for (let i = 0; i < this.dataService.cartItemList.length; i++) {
      if (product.title == this.dataService.cartItemList[i].title) {
        this.dataService.removeCartItem(product);
      }
    }
    this.dataService.addWishlist(product);
  }

  valChange(event: any) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    this.valInput = input.value
  }
  chooseImg(event: any) {
    this.mainImg.nativeElement.src = event;
    var numbImg = event.substring(event.length-4,event.length-5)
    window.localStorage.setItem("Product Price", '$70')
    window.localStorage.setItem("Product Title", 'Cartoon T-Shirts 0f'+ numbImg)
    window.localStorage.setItem("Product Img", event)
    this.ngOnInit();
  }
  proImgs: any[] = [
    {
      img: '../../../../assets/img/Product2 (1).png',
    },
    {
      img: '../../../../assets/img/Product2 (2).png',
    },
    {
      img: '../../../../assets/img/Product2 (1).png',
    },
    {
      img: '../../../../assets/img/Product2 (2).png',
    },
  ]

}
