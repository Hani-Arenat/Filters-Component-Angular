import { Action } from '@ngrx/store'
import { Payload } from './filters.model'

export const SELECT_FILTER = "SELECT_FILTER";
export const UNSELECT_FILTER = "UNSELECT_FILTER"
export const UNSELECT_ALL_FOR_FILTER = "UNSELECT_ALL_FOR_FILTER"
export const UNSELECT_ALL_FILTERS = "UNSELECT_ALL_FILTERS"

export class SelectFilter implements Action {
    readonly type = SELECT_FILTER

    constructor(public payload: number) { }
}

/* export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL

    constructor(public payload: number) {}
} */

export type Actions = SelectFilter