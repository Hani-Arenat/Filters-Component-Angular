import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterObject } from '../home/home.component';
import { SELECT_FILTER, UNSELECT_ALL_FOR_FILTER } from '../../store/actions'
interface StoreInterface {
  myReducer: AllSelectedFilters
}

export interface AllSelectedFilters {
  allSelectedFilters: AllFilters | null
}

export interface AllFilters {
  [key: string]: FilterOption[]
}
export interface FilterOption {
  id: string,
  title: string,
}
@Component({
  selector: 'app-filter-popup-options',
  templateUrl: './filter-popup-options.component.html',
  styleUrls: ['./filter-popup-options.component.scss'],
})
export class FilterPopupOptionsComponent implements OnInit {
  @Input() filterName: string = ''
  @Input() filterOptions?: FilterObject[]
  @Input() position?: string = ''

  @HostBinding('class.postion-relative')
  get getPosition() {
    return this.position === 'relative'
  }
  @HostListener("click", ["$event"])
  onClick(event: any): void {
    event.stopPropagation();
  }
  currentFilterSelections: any = [];
  constructor(private store: Store<StoreInterface>) {

  }

  ngOnInit(): void {
    this.store.subscribe(data => {
      this.currentFilterSelections = []
      Object.entries(data.myReducer).map(([key, value, index]: any) => {
        return value.map((filter: FilterOption) => {
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
    this.store.dispatch(
      {
        type: SELECT_FILTER,
        payload: {
          filterName: this.filterName,
          filterSelections: [...this.currentFilterSelections],
        }
      }
    );
  }
  handleUnselectAll() {
    this.store.dispatch({
      type: UNSELECT_ALL_FOR_FILTER,
      payload: {
        filterName: this.filterName
      }
    }
    );
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
