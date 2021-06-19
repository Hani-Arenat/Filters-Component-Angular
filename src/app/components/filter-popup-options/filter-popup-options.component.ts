import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterObject } from '../home/home.component';
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
  styleUrls: ['./filter-popup-options.component.css'],
})
export class FilterPopupOptionsComponent implements OnInit {
  @Input() filterName: string = ''
  @Input() filterOptions?: FilterObject[]
  constructor(private store: Store<StoreInterface>) { }

  ngOnInit(): void {
  }
  selectFilter(option: any) {
    debugger
    console.log('options >>', option)
    this.store.dispatch(
      {
        type: 'SELECT_FILTER', payload: {
          filterName: 'size',
          filterSelections: [{ id: '__id', title: '__title' }],
        }
      }
    );
  }
}
