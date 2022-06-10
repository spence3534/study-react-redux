import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Action } from '@/types/redux'
import thunk from 'redux-thunk'
import asyncList from './asyncList'

interface InitialState {
  count: number
}

const initialState: InitialState = {
  count: 0
}

function reducer(state: InitialState = initialState, action: Action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  reducer,
  asyncList
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
