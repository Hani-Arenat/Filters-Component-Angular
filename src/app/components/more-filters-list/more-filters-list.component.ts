import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-filters-list',
  templateUrl: './more-filters-list.component.html',
  styleUrls: ['./more-filters-list.component.scss']
})
export class MoreFiltersListComponent implements OnInit {
  @Input() moreFilters: any
  constructor() { }

  ngOnInit(): void {
  }

}
