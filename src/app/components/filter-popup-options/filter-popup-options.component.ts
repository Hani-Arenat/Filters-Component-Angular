import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getAllFilters } from '../../store/filters.selectors';
import { selectFilter, unSelectAllForFilter } from '../../store/filters.actions'
import * as Models from '../../store/filters.models'
@Component({
  selector: 'app-filter-popup-options',
  templateUrl: './filter-popup-options.component.html',
  styleUrls: ['./filter-popup-options.component.scss'],
})
export class FilterPopupOptionsComponent implements OnInit {
  @Input() filterName: string = ''
  @Input() filterOptions?: Models.FilterOption[]
  @Input() position?: string = ''
  currentFilterSelections: any = [];

  @HostBinding('class.postion-relative')
  get getPosition() {
    return this.position === 'relative'
  }
  @HostListener("click", ["$event"])
  onClick(event: any): void {
    event.stopPropagation();
  }

  constructor(private store: Store<Models.StoreInterface>) {

  }

  ngOnInit(): void {
    this.store.pipe(select(getAllFilters)).subscribe(data => {
      if (!data || !Object.keys(data)) return;
      this.currentFilterSelections = []
      Object.entries(data).map(([key, value, index]: any) => {
        return value.map((filter: Models.FilterOption) => {
          if (this.filterName === key) {
            this.currentFilterSelections.push({
              id: filter.id,
              title: filter.title,
              filterName: key
            })
          }
          if (this.filterName === 'More Filters' && index > 1) {
            this.currentFilterSelections.push({
              id: filter.id,
              title: filter.title,
              filterName: key
            })
          }
        })
      })
    })
  }

  handleApplySelections() {
    this.store.dispatch(selectFilter({
      payload: {
        filterName: this.filterName,
        filterSelections: [...this.currentFilterSelections],
      }
    }))

  }
  handleUnselectAll() {
    this.store.dispatch(unSelectAllForFilter({
      payload: {
        filterName: this.filterName,
      }
    }))
    this.currentFilterSelections = []
  }
  toggleFilterSelection(filterInfo: any) {
    let _currentData = [...this.currentFilterSelections];
    if (filterInfo.isFilterSelected) {
      _currentData = _currentData.filter((el) => el.id !== filterInfo.filterOption.id);
    } else {
      _currentData.push(filterInfo.filterOption);
    }
    this.currentFilterSelections = [..._currentData];
  };
}
