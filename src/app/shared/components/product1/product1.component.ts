import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { DetailsProductComponent } from 'src/app/modules/shop/components/details-product/details-product.component';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.scss']
})
export class Product1Component {
  @ViewChildren('add') add!: QueryList<any>;
  @Input() public setStorage!: DetailsProductComponent;
  @Input() start!:number;
  @Input() end!:number;
  product!:any;
  titleProd!:any;
  priceProd!:any;
  imgSrc!:any;
  quantity!: number;
  wishlist: any[] = [];
  constructor(private router: Router, private dataService: DataService) {
  }


  isInWishlist(item: any): boolean {
    return this.wishlist.some((wishlistItem) => wishlistItem.title === item.title);
  }
    

  addProduct(event: any) {
    var addProd = event.target;
    
    addProd.parentElement.classList.add("hidden");
    addProd.parentElement.previousSibling.classList.remove("hidden")
    addProd.parentElement.previousSibling.classList.add("flex")
    addProd.parentElement.previousSibling.firstChild.nextSibling.value = 1;
    var shopProd = addProd.parentElement.parentElement;
    this.imgSrc = shopProd.firstChild.src;
    this.titleProd = shopProd.firstChild.nextSibling.firstChild.nextSibling.innerText;
    this.priceProd = shopProd.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.innerText;
    this.quantity = shopProd.lastChild.previousSibling.firstChild.nextSibling.value;
    this.product = {
      title: this.titleProd,
      price: this.priceProd,
      img: this.imgSrc,
      quantity: Number(this.quantity),
      total: parseFloat(this.priceProd.replace("$", "")) * this.quantity,
    }
    console.log(this.product)
    for (let i = 0; i < this.dataService.cartItemList.length; i++) {
      if (this.product.title == this.dataService.cartItemList[i].title) {
        this.dataService.removeCartItem(this.product);
      }
    }
    this.dataService.addCart(this.product);
  }
  detailsProd(event:any) {
    var detailsProd = event.target;
    this.imgSrc = detailsProd.src;
    this.titleProd = detailsProd.nextSibling.firstChild.nextSibling.innerText;
    this.priceProd = detailsProd.nextSibling.lastChild.innerText;
    window.localStorage.setItem("Product Title", this.titleProd);
    window.localStorage.setItem("Product Price", this.priceProd);
    window.localStorage.setItem("Product Img", this.imgSrc);
    if (window.location.pathname != 'shop/product-details') {
      this.router.navigate(['shop/product-details']);
    }
    if (window.location.pathname == 'shop/product-details') {
      this.setStorage.ngOnInit();
    }
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  downCounter(event:any) {
  var down = event.target;
  down.nextSibling.value--;
  this.product.quantity--;
  for (let i = 0; i < this.dataService.cartItemList.length; i++) {
    if (this.product.title == this.dataService.cartItemList[i].title) {
      this.dataService.removeCartItem(this.product);
    }
  }
  this.product.total = parseFloat(this.priceProd.replace("$", "")) * this.product.quantity;
  this.dataService.addCart(this.product);
  if (isNaN(down.nextSibling.value) || down.nextSibling.value <= 0) {
    down.nextSibling.value = 0;
    down.parentElement.nextSibling.classList.remove("hidden");
    down.parentElement.classList.remove("flex")
    down.parentElement.classList.add("hidden")
    this.dataService.removeCartItem(this.product);
  }
  }
  upCounter(event:any) {
  var up = event.target;
  up.previousSibling.value++;
  this.product.quantity++;
  for (let i = 0; i < this.dataService.cartItemList.length; i++) {
    if (this.product.title == this.dataService.cartItemList[i].title) {
      this.dataService.removeCartItem(this.product);
    }
  }
  this.product.total = parseFloat(this.priceProd.replace("$", "")) * this.product.quantity;
  this.dataService.addCart(this.product);
  }
  products: any[] = [
    {
      id: 1,
      img: '../../../../assets/img/Product2 (1).png',
      mark: 'ZARA',
      title: 'Armelia pants',
      price: '21',
    },
    {
      id: 2,
      img: '../../../../assets/img/Product2 (2).png',
      mark: 'Adidas',
      title: 'Comfy T-Shirt',
      price: '45',
    },
    {
      id: 3,
      img: '../../../../assets/img/Product2 (1).png',
      mark: 'Nike',
      title: 'Blazer for everyday',
      price: '15',
    },
    {
      id: 4,
      // img: '../../../../assets/img/products/f4.jpg',
      img: '../../../../assets/img/Product2 (1).png',
      mark: 'Yves Saint L.',
      title: 'Met Gala Shoes',
      price: '100',
    },
    {
      id: 5,
      // img: '../../../../assets/img/products/f5.jpg',
      img: '../../../../assets/img/Product2 (2).png',
      mark: 'Lacoste',
      title: 'Shirt with Lacoste Sign',
      price: '120',
    },
    {
      id: 6,
      // img: '../../../../assets/img/products/f6.jpg',
      img: '../../../../assets/img/Product2 (1).png',
      mark: 'ZARA',
      title: 'Red shirt with flowers',
      price: '10',
    },
    {
      id: 7,
      // img: '../../../../assets/img/products/f7.jpg',
      img: '../../../../assets/img/Product2 (1).png',
      mark: 'Olearys',
      title: 'Famous 8 Ball gloves',
      price: '130',
    },
    {
      id: 8,
      // img: '../../../../assets/img/products/f8.jpg',
      img: '.../../../../assets/img/Product2 (1).png',
      mark: 'Armelia pants',
      title: 'ZARA',
      price: '15.95',
    },
    {
      id: 9,
      // img: '../../../../assets/img/products/n1.jpg',
      img: '../../../../assets/img/Product2 (2).png',
      mark: 'Scuderia Ferrari',
      title: 'Charles Leclerc Original T-Shirt',
      price: '2000',
    },
    {
      id: 10,
      // img: '../../../../assets/img/products/n2.jpg',
      img: '../../../../assets/img/Product2 (1).png',
      mark: 'Red Bull Racing Clothes',
      title: 'Max Verstappen Helmet',
      price: '500',
    },
    {
      id: 11,
      // img: '../../../../assets/img/products/n3.jpg',
      img: '../../../../assets/img/Product2 (1).png',
      mark: 'Loreal',
      title: 'Kim Kardashian Met Gala Dress',
      price: '1200',
    },
    {
      id: 12,
      // img: '../../../../assets/img/products/n4.jpg',
      img: '../../../../assets/img/Product2 (2).png',
      mark: 'Syoss',
      title: 'Red Kate Moss Dress',
      price: '1200',
    },
    {
      id: 13,
      // img: '../../../../assets/img/products/n5.jpg',
      img: 'h../../../../assets/img/Product2 (1).png',
      mark: 'Haas Racing',
      title: 'Mick Schumacher Sweater',
      price: '55',
    },
    {
      id: 14,
      // img: '../../../../assets/img/products/n6.jpg',
      img: '../../../../assets/img/Product2 (1).png',
      mark: 'AlphaTauri Clothes',
      title: 'Yuki Tsunoda signed Cap',
      price: '100',
    },
    
  ]
  starLoop(n: number): Array<number> {
    return Array(n);
  }
}


