import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';
import { LandingComponent } from './landing/landing.component';

import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';

const primeNgModule = [DividerModule, ButtonModule, BadgeModule];

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    primeNgModule
  ]
})
export class HomeModule { }
