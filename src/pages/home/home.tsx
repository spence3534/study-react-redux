import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './home.less'

export default function Index() {
  return (
    <div>
      <div className="link-list">
        <Link to="/">
          <span>首页</span>
        </Link>
        <Link to="information">
          <span>资讯</span>
        </Link>
        <Link to="my">
          <span>我的</span>
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
