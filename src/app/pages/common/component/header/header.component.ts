import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  menuItem: MenuItem[] = [];
  configuration: any;

  ngOnInit() {
    this.initalizeMenu();
    this.configuration = this.sharedService.getConfiguration();
  }

  initalizeMenu(){
    this.menuItem = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        url: '/'
      },
      {
        label: 'Women',
        icon: 'fas pi-fw fa-female',
        items: [
          {
            label: 'T-Shirt',
            url: '/category/women/T-Shirt'
          },
          {
            label: 'Jeans',
            url: '/category/women/jeans'
          },
          {
            label: 'Kurta',
            url: '/category/women/kurta'
          }
        ]
      },
      {
        label: 'Men',
        icon: 'fas pi-fw fa-male',
        items: [
          {
            label: 'T-Shirt',
            url: '/category/men/T-Shirt'
          },
          {
            label: 'Jeans',
            url: '/category/men/jeans'
          }
        ]
      },
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        url: '/'
      },
      {
        label: 'Women',
        icon: 'fas pi-fw fa-female',
        items: [
          {
            label: 'T-Shirt',
            url: '/category/women/T-Shirt'
          },
          {
            label: 'Jeans',
            url: '/category/women/jeans'
          },
          {
            label: 'Kurta',
            url: '/category/women/kurta'
          }
        ]
      },
      {
        label: 'Men',
        icon: 'fas pi-fw fa-male',
        items: [
          {
            label: 'T-Shirt',
            url: '/category/men/T-Shirt'
          },
          {
            label: 'Jeans',
            url: '/category/men/jeans'
          }
        ]
      }
    ]
  };
}
