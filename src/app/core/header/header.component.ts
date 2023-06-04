import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { DataService } from 'src/app/shared/services/data.service';
// FormsModule
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('bar') bar!: ElementRef;
  @ViewChild('nav') nav!: ElementRef;
  @ViewChild('close') close!: ElementRef;
  counter:number = 0;

  constructor(private router: Router, private dataService: DataService) {
    
    
  }

  // counter items
  ngOnInit(): void {
    this.dataService.getProducts()
    .subscribe(res=>{
      // this.counter = res.length
      var count = 0;
      res.forEach((e:any) => {
        count += e.quantity
      });
      return this.counter = count
    })
  }


  openMenu() {
    if (this.bar) {
        this.nav.nativeElement.classList.add("active");
    }
  }
  goToPage (pageName:any) : any{
    this.router.navigate((pageName)); 
  }
  closeMenu(event: any) {
    if (this.close) {
        this.nav.nativeElement.classList.remove("active");
    }
    event.preventDefault();
  }
  // Nav Title
  MainMenus: any[] = [
    {
      href: '/products',
      title: 'Our Products',
      icon: 'fas fa-products',
    },
    {
      href: '/support',
      title: 'Support',
      icon: 'fas fa--support',
    },
    
    {
      href: '/about',
      title: 'About',
      icon: 'fas fa-address-card',
    },
    {
      href: '../../login/login.component.html',
      title: 'Support',
    },
    {
      href: '/cart',
      cart: 'fas fa-shopping-bag',
      id: 'cart-bag',
    },
  ]
}
