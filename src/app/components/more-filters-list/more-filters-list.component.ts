import { Component, Input, OnInit } from '@angular/core';
import { FilterObject } from '../home/home.component';
@Component({
  selector: 'app-more-filters-list',
  templateUrl: './more-filters-list.component.html',
  styleUrls: ['./more-filters-list.component.scss']
})
export class MoreFiltersListComponent implements OnInit {
  @Input() moreFilters?: FilterObject[]
  constructor() { }

  ngOnInit(): void {
    console.log('more >>', this.moreFilters)
  }

}
