import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

interface StoreInterface {
  myReducer: AllSelectedFilters
}

export interface AllSelectedFilters {
  [x: string]: any;
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
  selector: 'app-applied-filters',
  templateUrl: './applied-filters.component.html',
  styleUrls: ['./applied-filters.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppliedFiltersComponent implements OnInit {
  appliedFilters: any = [];
  constructor(private store: Store<StoreInterface>) {
    this.store.subscribe(data => {
      this.appliedFilters = []
      Object.entries(data.myReducer).map(([key, value]) => {
        return value.map((filter: FilterOption) => {
          this.appliedFilters.push({
            id: filter.id,
            title: filter.title,
            filterName: key
          })
        })
      })
    })
  }

  ngOnInit(): void {
  }
  isAppliedFiltersEmpty() {
    return this.appliedFilters.length
  }
  handleUnSelectFilter(id: any, name: any) {
    this.store.dispatch(
      {
        type: 'UNSELECT_FILTER',
        payload: {
          filterId: id,
          filterName: name,
        }
      }
    );
  }
  clearAllFilters() {
    this.store.dispatch({
      type: 'UNSELECT_ALL_FILTERS'
    });
  }
}
