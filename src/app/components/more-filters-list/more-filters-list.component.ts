import { Component, Input } from '@angular/core';
import * as Models from '../../store/models'
@Component({
  selector: 'app-more-filters-list',
  templateUrl: './more-filters-list.component.html',
  styleUrls: ['./more-filters-list.component.scss']
})
export class MoreFiltersListComponent {
  @Input() moreFilters?: Models.FilterObject[]
  constructor() { }

  preventClick(e: any) {
    e.stopPropagation()
  }
}
