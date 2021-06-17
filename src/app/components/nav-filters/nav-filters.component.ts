import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FilterOptions } from '../home/home.component';
@Component({
  selector: 'app-nav-filters',
  templateUrl: './nav-filters.component.html',
  styleUrls: ['./nav-filters.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavFiltersComponent {
  @Input() filterOptions?: FilterOptions

  constructor() { }

  getRestOfFilters(filters: FilterOptions) {
    let restFilters: FilterOptions = {};
    const keys = Object.keys(filters);
    keys.forEach((el, index) => {
      if (index > 1) {
        restFilters[el] = filters[el];
      }
    });
    return restFilters;
  };

}
