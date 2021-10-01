import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';

const primeNgModule = [SidebarModule, MenubarModule];

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    primeNgModule
  ],
  exports: [
    HeaderComponent
  ],
})
export class CommonComponentModule { }
