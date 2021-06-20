import { Component, Input, OnInit, HostListener } from '@angular/core';
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
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.css']
})
export class FilterItemComponent implements OnInit {
  @Input() filterName: string = '';
  @Input() filterOptions?: FilterObject[]
  @Input() moreFilters?: any
  count: number = 0
  private currentFilterSelections: any = [];

  private wasInside = false;

  @HostListener('click', ['$event'])
  clickInside($event: any) {
    console.log("clicked inside");
    this.wasInside = true;
    $event.stopPropagation();
  }

  @HostListener('document:click', ['$event'])
  clickout($event: any) {
    if (!this.wasInside) {
      console.log("clicked outside");
      $event.stopPropagation();
    }
    this.wasInside = false;
  }

  constructor(private store: Store<StoreInterface>) { }
  showPopupValue() {
    return this.wasInside
  }
  ngOnInit(): void {
    console.log('ngOnInit.......')
    this.store.subscribe(data => {
      let _data: any = { ...data.myReducer }
      this.count = _data[this.filterName]?.length
      debugger
    })

  }

  getSelectionCount() {
    return this.count
  }

}


