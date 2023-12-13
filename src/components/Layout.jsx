import { Outlet } from 'react-router-dom';

// This component could be used as a shared component between pages.
// It could be useful as a navigation panel.
// The Outlet component renders whatever is the content of the current page
// and you can add more elements above or below, and these will be
// preserved even if you switch to another page.
const Layout = () => (
  <Outlet />
);

export default Layout;
