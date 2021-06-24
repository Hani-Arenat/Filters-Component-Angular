import { Component, Input, OnInit, HostListener, ElementRef } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getAllFilters } from 'src/app/store/filters.selectors';
import * as Models from '../../store/filters.models'

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
    this.store.pipe(select(getAllFilters)).subscribe((data: any) => {
      this.selectionCount = 0
      if (!data || !Object.keys(data)) return;
      if (this.filterName === 'More Filters') {
        let _count = 0;
        const keys = Object.keys(this.moreFilters);
        keys.forEach((el) => {
          if (data[el]) {
            _count += data[el].length;
          }
        })
        this.selectionCount = _count
      } else {
        this.selectionCount = data[this.filterName]?.length

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


