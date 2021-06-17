import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FilterObject } from '../home/home.component';

@Component({
  selector: 'app-filter-popup-options',
  templateUrl: './filter-popup-options.component.html',
  styleUrls: ['./filter-popup-options.component.css'],
})
export class FilterPopupOptionsComponent implements OnInit {
  @Input() filterName: string = ''
  @Input() filterOptions?: FilterObject[]
  constructor() { }

  ngOnInit(): void {
  }

}
