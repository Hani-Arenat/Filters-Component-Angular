import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FilterOptions } from '../home/home.component';
@Component({
  selector: 'app-nav-filters',
  templateUrl: './nav-filters.component.html',
  styleUrls: ['./nav-filters.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavFiltersComponent {
  @Input() filterOptions?: FilterOptions;

  constructor() { }

  getRestOfFilters() {
    let restFilters: FilterOptions = {};
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
    }else{
      return 0
    }
  }

}
