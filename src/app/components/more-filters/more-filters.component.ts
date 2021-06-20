import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-filters',
  templateUrl: './more-filters.component.html',
  styleUrls: ['./more-filters.component.css']
})
export class MoreFiltersComponent implements OnInit {
  @Input() moreFilters: any;
  constructor() { }

  ngOnInit(): void {
  }

}
