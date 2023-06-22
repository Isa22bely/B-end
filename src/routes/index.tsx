import { Routes, Route } from 'react-router-dom'
import { PageHome, PageLayout, PageList } from '../pages'

export const RouteSoftware = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<PageHome />} />
        <Route path="lista" element={<PageList />} />
      </Route>
    </Routes>
  )
}