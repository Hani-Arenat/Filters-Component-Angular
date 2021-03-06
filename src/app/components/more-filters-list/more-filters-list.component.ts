import { Component, Input } from '@angular/core';
import * as Models from '../../store/filters.models'
@Component({
  selector: 'app-more-filters-list',
  templateUrl: './more-filters-list.component.html',
  styleUrls: ['./more-filters-list.component.scss']
})
export class MoreFiltersListComponent {
  @Input() moreFilters?: Models.FilterOption[]
  constructor() { }

  preventClick(e: any) {
    e.stopPropagation()
  }
}
