import { FC } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import Page1 from '../components/Page1';

const Router: FC = () => {
  return (
    <HashRouter basename={"/"}>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path='/13' element={<div>13212313</div>} />
          <Route path="/1212" element={<Page1 />} />
          <Route index element={<Navigate to="/13" />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
export default Router

