import { createAction, props } from "@ngrx/store";
import * as Models from "./filters.models";


export const SELECT_FILTER = "SELECT_FILTER";
export const UNSELECT_FILTER = "UNSELECT_FILTER"
export const UNSELECT_ALL_FOR_FILTER = "UNSELECT_ALL_FOR_FILTER"
export const UNSELECT_ALL_FILTERS = "UNSELECT_ALL_FILTERS"
export const GET_FILTERS = 'GET_FILTERS'
export const SET_FILTERS = 'SET_FILTERS'

export const getFilters = createAction(GET_FILTERS)

export const unSelectFilter = createAction(UNSELECT_FILTER, props<Models.PayloadProps>())

export const unSelectAllFilter = createAction(UNSELECT_ALL_FILTERS)

export const selectFilter = createAction(SELECT_FILTER, props<Models.PayloadProps>())

export const unSelectAllForFilter = createAction(UNSELECT_ALL_FOR_FILTER, props<Models.PayloadProps>())
