import { createFeatureSelector, createSelector } from "@ngrx/store"
import * as Models from './filters.models'


export const allFS = createFeatureSelector<Models.AllFilters>('reducer')
export const getAllFilters = createSelector(
  allFS,
  (data: Models.AllFilters) => {
    return data.all
  })
