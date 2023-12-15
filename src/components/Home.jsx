import { NavLink, redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {

  useEffect(()=>{
    user = JSON.parse(localStorage.getItem('user'));
    if (user.username) { // If user is already logged in redirects to the motors page
      return redirect('/motors');
    }
  }, []);

  return (
    <>
      <h1>Welcome to the home page</h1>
      <NavLink to='/login'>Log In</NavLink>
      <NavLink to='/signin'>Sign In</NavLink>
    </>
  );
}

export default Home;
