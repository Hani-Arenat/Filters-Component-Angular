import { Component, Input, OnInit, HostListener, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Models from '../../store/models'

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.css']
})
export class FilterItemComponent implements OnInit {
  @Input() filterName: string = '';
  @Input() filterOptions?: Models.FilterOption[]
  @Input() moreFilters?: any
  selectionCount: number = 0
  private showPopup = false;

  constructor(private _eref: ElementRef, private store: Store<Models.StoreInterface>) {

  }
  ngOnInit(): void {
    this.store.subscribe(data => {
      let _data: any = { ...data?.myReducer?.all }
      if (this.filterName === 'More Filters') {
        let _count = 0;
        const keys = Object.keys(this.moreFilters);
        keys.forEach((el) => {
          if (_data[el]) {
            _count += _data[el].length;
          }
        })
        this.selectionCount = _count
      } else {
        this.selectionCount = _data[this.filterName]?.length

      }
    })
  }
  @HostListener('click')
  clickInside() {
    this.showPopup = !this.showPopup;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.showPopup = false;
    }
  }
  showPopupValue() {
    return this.showPopup
  }
  getSelectionCount() {
    return this.selectionCount
  }
}


