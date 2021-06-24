import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Models from '../../store/filters.models'

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
  constructor(private store: Store<Models.StoreInterface>) {

  }

  ngOnInit(): void {
    this.store.subscribe(data => {
      let _data: any = { ...data?.myReducer?.all }
      this.selectionCount = _data[this.filterName]?.length
    })
  }
  handleShowContent = () => {
    this.showContent = !this.showContent;
  };
}
