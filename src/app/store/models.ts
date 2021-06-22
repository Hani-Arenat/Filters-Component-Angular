export interface StoreInterface {
  [key: string]: AllFilters
}
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
