import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

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
  selector: 'app-drop-down-item',
  templateUrl: './drop-down-item.component.html',
  styleUrls: ['./drop-down-item.component.scss']
})
export class DropDownItemComponent implements OnInit {
  @Input() filterName: string = '';
  @Input() filterOptions?: any

  selectionCount: number = 0;
  showContent: boolean = false;
  constructor(private store: Store<StoreInterface>) { }

  ngOnInit(): void {
    this.store.subscribe(data => {
      let _data: any = { ...data.myReducer }
      this.selectionCount = _data[this.filterName]?.length
    })

  }
  getSelectionCount() {
    return this.selectionCount
  }
  handleShowContent = () => {
    this.showContent = !this.showContent;
  };
}
