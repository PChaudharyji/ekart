import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PrimeNGConfig]
})
export class AppComponent implements OnInit{

  isHomePage: boolean = true;

  constructor(private primengConfig: PrimeNGConfig){}

  ngOnInit(){
    this.primengConfig.ripple = true;
    this.isHomePage = location.pathname === '/' ? true : false;
  }

  updatePWA(){
    window.location.reload();
  }
}
