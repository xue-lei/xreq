import { FC } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Page } from '../page/Page';
import { Layout } from '../layout/Layout';

const Router: FC = () => {
  return (
    <HashRouter basename={"/"}>
      <Routes>
        <Route path="/" element={<Layout />} >
          {/* <Route path='/13' element={<div>13212313</div>} /> */}
          <Route path="/request" element={<Page />} />
          <Route index element={<Navigate to="/request" />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
export default Router

