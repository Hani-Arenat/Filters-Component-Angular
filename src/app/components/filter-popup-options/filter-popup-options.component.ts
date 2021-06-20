import { Component, HostBinding, Input, OnInit } from '@angular/core';
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
  currentFilterSelections: any = [];
  // allAppliedFilters: any = {};
  constructor(private store: Store<StoreInterface>) {

  }

  ngOnInit(): void {
    console.log('ngOnInit.......')
    this.store.subscribe(data => {
      // debugger
      // this.allAppliedFilters = { ...data.myReducer }
      this.currentFilterSelections = []
      Object.entries(data.myReducer).map(([key, value]: any) => {
        return value.map((filter: FilterOption) => {
          if (this.filterName === key) {
            this.currentFilterSelections.push({
              id: filter.id,
              title: filter.title,
              filterName: key
            })
          } else {
            this.currentFilterSelections = []
          }
        })
      })
      console.log('ngOnInit currentFilterSelections....>', this.currentFilterSelections)

    })

  }

  handleApplySelections() {
    this.store.dispatch(
      {
        type: 'SELECT_FILTER',
        payload: {
          filterName: this.filterName,
          filterSelections: [...this.currentFilterSelections],
        }
      }
    );
  }
  handleUnselectAll() {
    this.store.dispatch({
      type: 'UNSELECT_ALL_FOR_FILTER',
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
