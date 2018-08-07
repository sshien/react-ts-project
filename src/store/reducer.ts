import * as actionType from './action-type'

interface IAction {
  type: string,
  datatype: string,
  value: any
}

/**
 * @name home数据
 */
const defaultState = {
  hello: 'hello world',
  list: []
}

/**
 * @name 默认导出方法
 */
export default ( state = defaultState, action:IAction) => {
  switch(action.type) {
    case actionType.HOME_BANNER_LIST: 
      return {...state, ...{[action.datatype]: action.value}}
    default:
      return state
  }
}