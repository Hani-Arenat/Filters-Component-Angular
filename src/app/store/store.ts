import * as Actions from './actions'
import * as Models from './models'

let initState = {}

export function reducer(state: Models.AllFilters = initState, action: Models.Payload) {
  switch (action.type) {
    case Actions.SELECT_FILTER:
      let _state: Models.AllFilters = { ...state };
      _state[action.payload.filterName] = [...action.payload.filterSelections]
      return _state;

    case Actions.UNSELECT_FILTER:
      let __state = { ...state };
      __state[action.payload.filterName] = __state[
        action.payload.filterName
      ].filter((el) => el.id !== action.payload.filterId);

      return __state;

    case Actions.UNSELECT_ALL_FOR_FILTER:
      let currentState = { ...state };
      delete currentState[action.payload.filterName];
      return currentState;

    case Actions.UNSELECT_ALL_FILTERS:
      return {};
    default:
      return state;
  }
};
