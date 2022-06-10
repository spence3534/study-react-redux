import { Action } from '@/types/redux'
import { store } from './index'
interface InitialState {
  list: string[]
}

const initialState: InitialState = {
  list: []
}

export const changeList = (value: string[]) => {
  return {
    type: 'CHANGE_LIST',
    payload: value
  }
}

export const getList = () => (dispatch: any, getState: any) => {
  setTimeout(() => {
    const action = changeList(['1', '2', '3', '4', '5'])
    dispatch(action)
  }, 3000);
}


export default (state: InitialState = initialState, action: Action): InitialState => {
  switch (action.type) {
    case 'CHANGE_LIST':
      return {
        list: action.payload
      }
    default:
      return state
  }
}
