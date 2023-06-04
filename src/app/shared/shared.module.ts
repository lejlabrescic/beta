import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product1Component } from './components/product1/product1.component';
import { FeatureComponent } from './components/feature/feature.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FeatureComponent,
    Product1Component,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FeatureComponent,
    Product1Component,
    PaginationComponent
  ],
})
export class SharedModule { }
