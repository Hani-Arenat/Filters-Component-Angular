import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { unSelectFilter, unSelectAllFilter } from '../../store/filters.actions';
import * as Models from '../../store/filters.models'
import { getAllFilters } from '../../store/filters.selectors'
@Component({
  selector: 'app-applied-filters',
  templateUrl: './applied-filters.component.html',
  styleUrls: ['./applied-filters.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppliedFiltersComponent implements OnInit {
  appliedFilters: any = [];

  constructor(private store: Store<Models.StoreInterface>) { }

  ngOnInit(): void {
    this.store.pipe(select(getAllFilters)).subscribe(
      (data: any) => {
        console.log('watch >>', data) //your data shows here
        this.appliedFilters = []
        if (!data || !Object.keys(data)) return;

        Object.entries(data).map(([key, value]) => {
          // @ts-expect-error
          return value.map((filter: Models.FilterOption) => {
            this.appliedFilters.push({
              id: filter.id,
              title: filter.title,
              filterName: key
            })
          })
        })
      });
  }
  isAppliedFiltersEmpty() {
    return this.appliedFilters.length
  }
  handleUnSelectFilter(id: any, name: any) {
    this.store.dispatch(unSelectFilter({ payload: { filterId: id, filterName: name } }))
  }
  clearAllFilters() {
    this.store.dispatch(unSelectAllFilter())

  }
}
