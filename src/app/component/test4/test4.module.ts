import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test4RoutingModule } from './test4-routing.module';
import { Test4Component } from './test4.component';


@NgModule({
  declarations: [
    Test4Component
  ],
  imports: [
    CommonModule,
    Test4RoutingModule
  ]
})
export class Test4Module { }
