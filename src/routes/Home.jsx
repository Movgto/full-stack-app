import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <NavLink to='/login'>Log In</NavLink>
      <NavLink to='/signup'>Sign Up</NavLink>
    </>
  );
}