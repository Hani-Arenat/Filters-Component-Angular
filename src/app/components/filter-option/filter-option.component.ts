import { Component, Input, OnInit } from '@angular/core';
import { FilterObject } from '../home/home.component';

@Component({
  selector: 'app-filter-option',
  templateUrl: './filter-option.component.html',
  styleUrls: ['./filter-option.component.css']
})
export class FilterOptionComponent implements OnInit {
  @Input() filterOption?: FilterObject
  constructor() { }

  ngOnInit(): void {
  }

}
