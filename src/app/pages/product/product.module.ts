import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { ProductRoutingModule } from './product.routing.module';
import { GalleriaModule } from 'primeng/galleria';
import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';



@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    GalleriaModule,
    TagModule,
    BadgeModule
  ]
})
export class ProductModule { }
