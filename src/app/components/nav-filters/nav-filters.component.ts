import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { FilterOptions } from '../home/home.component';
@Component({
  selector: 'app-nav-filters',
  templateUrl: './nav-filters.component.html',
  styleUrls: ['./nav-filters.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavFiltersComponent implements OnInit {
  @Input() filterOptions?: FilterOptions;
  filtersData: any;
  constructor() { }
  ngOnInit(): void {
  }
  getRestOfFilters() {
    let restFilters: any = {};
    if (this.filterOptions) {
      const keys = Object.keys(this.filterOptions);
      keys.forEach((el, index) => {
        if (index > 1 && this.filterOptions) {
          restFilters[el] = this.filterOptions[el];
        }
      });
    }
    return restFilters;
  };

  showMoreFilters() {
    if (this.filterOptions) {
      return Object.keys(this.filterOptions).length > 2
    } else {
      return false
    }
  }
  originalOrder(a: any, b: any) {
    return a;
  }

}
