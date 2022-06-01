import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test3RoutingModule } from './test3-routing.module';
import { Test3Component } from './test3.component';
import { ShareModule } from '../share.module';


@NgModule({
  declarations: [
    Test3Component
  ],
  imports: [
    CommonModule,
    Test3RoutingModule,
    ShareModule
  ]
})
export class Test3Module { }
