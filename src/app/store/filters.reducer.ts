import { Action } from '@ngrx/store'
import { AllFilters, FilterOption } from './filters.model'
import * as FiltersActions from './filters.actions'

interface Pd {
    type: string,
    payload?: any
}

export function reducer(state: AllFilters = {}, action: Pd) {

    switch (action.type) {
        case FiltersActions.SELECT_FILTER:
            let _state = { ...state };
            /* _state[action.payload] = [
              ...action.payload.filterSelections,
            ]; 
            return _state;*/
            return [_state, action.payload];

        default:
            return state;
    }
}