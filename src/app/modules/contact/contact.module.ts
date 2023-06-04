import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { FormDetailsComponent } from './components/form-details/form-details.component';

const routes: Routes = [
  {
    path: '/contact',
    component: ContactPageComponent
  },
];

@NgModule({
  declarations: [
    ContactPageComponent,
    FormDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ContactModule { }
