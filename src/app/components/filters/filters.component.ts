import { Component, Input } from '@angular/core';
import * as Models from '../../store/models'

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Input() filterOptions?: Models.AllFilters
  constructor() { }


  isFiltersNotEmpty() {
    return (
      this.filterOptions &&
      typeof this.filterOptions === "object" &&
      Object.keys(this.filterOptions).length > 0
    );
  };
}
