import { Component, Input } from '@angular/core';
import { FilterOptions } from '../home/home.component';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Input() filterOptions?: FilterOptions
  constructor() { }


  isFiltersNotEmpty() {
    return (
      this.filterOptions &&
      typeof this.filterOptions === "object" &&
      Object.keys(this.filterOptions).length > 0
    );
  };
}
