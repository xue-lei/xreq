import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Layout: FC = () => {
  return (
    <div>
      <Link to="/1212">999999999</Link>
      <Link to="/13">888888</Link>
      <div>13123131244</div>
      <Outlet />
    </div>
  )
}
