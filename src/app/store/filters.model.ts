export interface AllFilters {
  [key: string]: FilterOption[]
}
export interface FilterOption {
  id: string,
  title: string,
}
export interface Payload {
  type: string,
  payload?: PayloadData
}
export interface PayloadData {
[key: string]: string | FilterOption[]
}