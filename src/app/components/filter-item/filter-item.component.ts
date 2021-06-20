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

  selectionCount: number = 0
  private showPopup = false;

  @HostListener('click', ['$event'])
  clickInside($event: any) {
    console.log("clicked inside");
    this.showPopup = true;
    $event.stopPropagation();
  }

  @HostListener('document:click', ['$event'])
  clickout($event: any) {
    if (!this.showPopup) {
      console.log("clicked outside");
      $event.stopPropagation();
    }
    this.showPopup = false;
  }

  constructor(private store: Store<StoreInterface>) {

  }
  showPopupValue() {
    return this.showPopup
  }
  ngOnInit(): void {
    this.store.subscribe(data => {
      let _data: any = { ...data.myReducer }
      this.selectionCount = _data[this.filterName]?.length
    })

  }

  getSelectionCount() {
    return this.selectionCount
  }

}


