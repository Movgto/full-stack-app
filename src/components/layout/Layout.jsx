import { useEffect } from "react";
import { Outlet, redirect } from "react-router";

export default function Layout() {

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      return redirect('/motors');
    }
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}