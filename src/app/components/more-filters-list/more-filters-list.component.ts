import { Component, Input } from '@angular/core';
import { FilterObject } from '../home/home.component';
@Component({
  selector: 'app-more-filters-list',
  templateUrl: './more-filters-list.component.html',
  styleUrls: ['./more-filters-list.component.scss']
})
export class MoreFiltersListComponent {
  @Input() moreFilters?: FilterObject[]
  constructor() { }

  preventClick(e: any) {
    e.stopPropagation()
  }
}
