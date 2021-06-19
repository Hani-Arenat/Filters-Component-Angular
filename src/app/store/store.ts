import { Action, ActionReducer } from "@ngrx/store";
import * as FiltersActions from "./filters.actions";
export const SELECT_FILTER = "SELECT_FILTER";
export const UNSELECT_FILTER = "UNSELECT_FILTER"
export const UNSELECT_ALL_FOR_FILTER = "UNSELECT_ALL_FOR_FILTER"
export const UNSELECT_ALL_FILTERS = "UNSELECT_ALL_FILTERS"

let initState = {}

export interface AllFilters {
  [key: string]: FilterOption[]
}
export interface FilterOption {
  id: string,
  title: string,
}

export interface Payload {
  type: string,
  payload?: number | undefined | any
}
export interface PayloadData {
  [key: string]: string | FilterOption[]
}

export function reducer(state: AllFilters = initState, action: Payload) {
  console.log('state >>', state)
  console.log('action >>', action)
  switch (action.type) {
    case SELECT_FILTER:
      let _state: AllFilters = { ...state };
      _state[action.payload.filterName] = action.payload.filterSelections

      console.log('>>', _state)
      return _state;

    case UNSELECT_FILTER:
      let __state = { ...state };
      __state[action.payload.filterName] = __state[
        action.payload.filterName
      ].filter((el) => el.id !== action.payload.filterId);

      return __state;

    /* case UNSELECT_ALL_FOR_FILTER:
         let currentState = { ...state };
         delete currentState[action.payload.data.filterName];
         return currentState;*/

    case UNSELECT_ALL_FILTERS:
      return {};
    default:
      return state;
  }
};
