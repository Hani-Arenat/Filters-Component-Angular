import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { allSelector } from 'src/app/store/store';
import { UNSELECT_FILTER, UNSELECT_ALL_FILTERS, unSelectFilter, unSelectAllFilter } from '../../store/actions';
import * as Models from '../../store/models'
@Component({
  selector: 'app-applied-filters',
  templateUrl: './applied-filters.component.html',
  styleUrls: ['./applied-filters.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppliedFiltersComponent implements OnInit {
  appliedFilters: any = [];
  // @ts-expect-error
  spinner$: Observable<any>;

  constructor(private store: Store<Models.StoreInterface>) {
    this.store.subscribe(data => {
      this.appliedFilters = []
      let _data: any = { ...data?.myReducer?.all }
      Object.entries(_data).map(([key, value]) => {
        // @ts-expect-error
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
    this.spinner$ = this.store.pipe(select(allSelector))
  }
  isAppliedFiltersEmpty() {
    return this.appliedFilters.length
  }
  handleUnSelectFilter(id: any, name: any) {
    this.store.dispatch(unSelectFilter({ filterId: id, filterName: name }))
  }
  clearAllFilters() {
    this.store.dispatch(unSelectAllFilter())

  }
}
