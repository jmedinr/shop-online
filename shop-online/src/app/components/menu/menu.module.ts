import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../list/list.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [MenuComponent]
})
export class MenuModule {}
