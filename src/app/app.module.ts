import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { NavFiltersComponent } from './components/nav-filters/nav-filters.component';
import { FilterItemComponent } from './components/filter-item/filter-item.component';
import { FilterPopupOptionsComponent } from './components/filter-popup-options/filter-popup-options.component';
import { FilterOptionComponent } from './components/filter-option/filter-option.component';
import { AppliedFiltersComponent } from './components/applied-filters/applied-filters.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/store';
import { MoreFiltersListComponent } from './components/more-filters-list/more-filters-list.component';
import { DropDownItemComponent } from './components/drop-down-item/drop-down-item.component';
import { MoreFiltersComponent } from './components/more-filters/more-filters.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FiltersComponent,
    NavFiltersComponent,
    FilterItemComponent,
    FilterPopupOptionsComponent,
    FilterOptionComponent,
    AppliedFiltersComponent,
    MoreFiltersListComponent,
    DropDownItemComponent,
    MoreFiltersComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ myReducer: reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
