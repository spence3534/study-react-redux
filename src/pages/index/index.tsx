import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.less'
import { connect } from 'react-redux'
import { getList } from '@/store/asyncList'

function Index(props: any) {
  const increment = (): void => {
    props.dispatch({ type: 'INCREMENT' })
  }

  const decrement = (): void => {
    props.dispatch({ type: 'DECREMENT' })
  }

  useEffect(() => {
    const action = getList()
    props.dispatch(action)
  })

  return (
    <Fragment>
      <div>
        <Link to="/goods-detail">首页</Link>
      </div>
      <div className="count-container">
        <button onClick={decrement}>-</button>
        <span>{props.count}</span>
        <button onClick={increment}>+</button>
      </div>
      <ul className="list">
        {props.list.map((i: string) => (
          <li className="list-item" key={i}>
            {i}
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

function stateToProps(state: Record<string, Record<string, number | string[]>>) {
  return {
    count: state.reducer.count,
    list: state.asyncList.list,
  }
}

export default connect(stateToProps)(Index)
