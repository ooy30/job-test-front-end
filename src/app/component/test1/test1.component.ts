import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {
  heroSelect = '';
  listHero = [
    {no : 11,label : 'Dr Nice' },
    {no : 12,label : 'necromancer' },
    {no : 13,label : 'Bombasto' },
    {no : 14,label : 'Celeritas' },
    {no : 15,label : 'Magneta' },
    {no : 16,label : 'RubberMan' },
    {no : 17,label : 'Dynama' },
    {no : 18,label : 'Dr IQ' },
    {no : 19,label : 'Magma' },
    {no : 20,label : 'Tornado' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
