import { Component, Input, Output, EventEmitter, OnInit, SimpleChanges, OnChanges, HostBinding } from '@angular/core';
import { FilterObject } from '../home/home.component';

@Component({
  selector: 'app-filter-option',
  templateUrl: './filter-option.component.html',
  styleUrls: ['./filter-option.component.css']
})
export class FilterOptionComponent implements OnInit, OnChanges {
  @Input() filterOption?: FilterObject
  @Input() currentFilterSelections: any
  @Output() toggleFilterSelection: EventEmitter<any> = new EventEmitter()

  @HostBinding('class.highlight')
  get isSelected() {
    return this.isFilterSelected
  }

  isFilterSelected: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.doInitChecks()
  }
  ngOnChanges(changes: SimpleChanges) {
    this.doInitChecks()
  }
  doInitChecks() {
    if (this.currentFilterSelections.length) {
      const currentFilterIndex = this.currentFilterSelections.findIndex(
        (el: any) => el.id === this.filterOption?.id
      );
      if (currentFilterIndex !== -1) {
        this.isFilterSelected = true
      } else {
        this.isFilterSelected = false
      }
    } else {
      this.isFilterSelected = false
    }
  }
  handleOnClick() {
    this.toggleFilterSelection.emit({
      isFilterSelected: this.isFilterSelected, filterOption: this.filterOption
    })
    this.isFilterSelected = !this.isFilterSelected;
  }
}

