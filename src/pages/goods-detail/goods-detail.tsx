import React, { Fragment, useEffect } from 'react'
import { useUserDispatch, useUserSelector } from '../../store/hook'
import { shallowEqual } from 'react-redux'
import { setUserId } from '../../store/user'

export default function GoodsDetail() {
  const dispatch = useUserDispatch()
  const user = useUserSelector(state => ({ ...state.user }))

  return (
    <Fragment>
      <div>
        <button
          onClick={() => {
            dispatch(setUserId(1))
          }}
        >click me</button>
      </div>
      <div>
        {user.value}
      </div>
    </Fragment>
  )
}
