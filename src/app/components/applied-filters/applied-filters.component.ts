import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { UNSELECT_FILTER, UNSELECT_ALL_FILTERS } from '../../store/actions';
import * as Models from '../../store/models'
@Component({
  selector: 'app-applied-filters',
  templateUrl: './applied-filters.component.html',
  styleUrls: ['./applied-filters.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppliedFiltersComponent implements OnInit {
  appliedFilters: any = [];
  constructor(private store: Store<Models.StoreInterface>) {
    this.store.subscribe(data => {
      this.appliedFilters = []
      Object.entries(data.myReducer).map(([key, value]) => {
        return value.map((filter: Models.FilterOption) => {
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
        type: UNSELECT_FILTER,
        payload: {
          filterId: id,
          filterName: name,
        }
      }
    );
  }
  clearAllFilters() {
    this.store.dispatch({
      type: UNSELECT_ALL_FILTERS
    });
  }
}
