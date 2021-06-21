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
export interface StoreInterface {
  myReducer: AllSelectedFilters
}

export interface AllSelectedFilters {
  [x: string]: any;
  allSelectedFilters: AllFilters | null
}
export interface FilterObject {
  id: string,
  title: string,
}
