import * as Actions from './filters.actions'
import * as Models from './filters.models'

let initState = {
  all: {},
  customer: {
    test: [{ id: '1', title: 'title_1' }]
  }
}

export function reducer(state: Models.StoreInterface = initState, action: Models.Payload) {
  switch (action.type) {
    case Actions.SELECT_FILTER:
      let _state = JSON.parse(JSON.stringify(state));
      if (!_state.all) {
        _state.all = {}
      }
      _state.all = { ..._state.all, [action.payload.filterName]: [...action.payload.filterSelections] }
      return _state
    //{ ...state, all: { ...state.all, [action.payload.filterName]: [...action.payload.filterSelections] } };

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
      // Effects Action
      return state;
    default:
      return state;
  }
};



