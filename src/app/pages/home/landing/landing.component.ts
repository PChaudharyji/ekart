import { Component, OnInit } from '@angular/core';
import { carousel } from 'src/app/dummyData/carousel';
import { categoryItem, productList } from 'src/app/dummyData/category';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  carousel: any = carousel;
  configuration: any;
  categoryList: any = categoryItem;
  productList: any = productList;

  ngOnInit() {
    this.configuration = this.sharedService.getConfiguration();
  }

}
