import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FilterObject } from '../home/home.component';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.css']
})
export class FilterItemComponent implements OnInit {
  @Input() filterName: string = '';
  @Input() filterOptions?: FilterObject[]

  constructor() { }

  ngOnInit(): void {
  }

}
