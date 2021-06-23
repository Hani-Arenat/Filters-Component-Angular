import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as Actions from './actions'
import * as Models from './models'

let initState = {
  all: {},
  customer: {}
}

export function reducer(state: Models.StoreInterface = initState, action: Models.Payload) {
  switch (action.type) {
    case Actions.SELECT_FILTER:
      return { ...state, all: { ...state.all, [action.payload.filterName]: [...action.payload.filterSelections] } };

    case Actions.UNSELECT_FILTER:
      let __state = JSON.parse(JSON.stringify(state));
      __state['all'][action.payload.filterName] = __state['all'][
        action.payload.filterName
      ].filter((el: any) => el.id !== action.payload.filterId);

      return __state;

    case Actions.UNSELECT_ALL_FOR_FILTER:
      let currentState = JSON.parse(JSON.stringify(state));
      if (currentState['all'][action.payload.filterName]) {
        delete currentState['all'][action.payload.filterName];
      }
      return currentState;

    case Actions.UNSELECT_ALL_FILTERS:
      return {};

    case 'SET_FILTERS':
      console.log('Store HERE >>', action.payload)
      return state;
    default:
      return state;
  }
};


// Selectors

let allFS = createFeatureSelector<Models.StoreInterface>('all')
export let allSelector = createSelector(allFS, (state: Models.StoreInterface) => state.all)
