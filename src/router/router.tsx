import { Routes, Route, Link } from 'react-router-dom'
import Information from '../pages/information/information'
import My from '../pages/my/my'
import Home from '../pages/home/home'
import Index from '../pages/index'
import GoodsDetail from '../pages/goods-detail/goods-detail'

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Index />} />
        <Route path="information" element={<Information />} />
        <Route path="my" element={<My />} />
      </Route>
      <Route path="/goods-detail" element={<GoodsDetail />} />
    </Routes>
  )
}
