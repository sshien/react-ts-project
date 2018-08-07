import * as home from './action-type'

export const savaFormData = (datatype: string, value: string) => {
  return {
    datatype,
    type: home.HOME_BANNER_LIST,
    value,
  }
}

export const savaImg = (path: string) => {
  return {
    path,
    type: home.HOME_BANNER_LIST,
  }
}