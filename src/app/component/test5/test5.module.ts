import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test5RoutingModule } from './test5-routing.module';
import { Test5Component } from './test5.component';


@NgModule({
  declarations: [
    Test5Component
  ],
  imports: [
    CommonModule,
    Test5RoutingModule
  ]
})
export class Test5Module { }
