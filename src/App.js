import React, { useEffect } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import the necessary components
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SignInPage from './pages/signin/SignIn';
import Layout from './components/layout/Layout';
import Main from './routes/Home';
import Reserve from './routes/Reserve';
import { usersSelector } from './redux/store';
import createUser from './redux/user/thunk';
import LoadingScreen from './components/conditions/LoadingScreen';
import AddNew from './routes/AddNew';
import Delete from './routes/Delete';

function App() {
  const dispatch = useDispatch();
  const {
    user, isLoading, error, errMsg,
  } = useSelector(usersSelector);
  const storedUser = localStorage.getItem('user');
  useEffect(() => {
    if (storedUser) {
      dispatch(createUser({ username: storedUser }));
    }
  }, [dispatch, storedUser]);

  if (isLoading && storedUser) {
    return (
      <Layout>
        <LoadingScreen />
      </Layout>
    );
  }

  if (error) {
    return (
      <div>
        <h1 className="text-white text-2xl text-center">Error</h1>
        <p className="text-white text-center">{ errMsg }</p>
      </div>
    );
  }

  if (!user || user.length === 0) {
    return (
      <>
        <ToastContainer />
        <SignInPage />
      </>
    );
  }

  return (
    <>
      <ToastContainer />
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/motors" element={<Main />} />
          <Route path="/reserve/:id" element={<Reserve />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/add/:id" element={<AddNew />} />
          <Route path="/delete/:id" element={<Delete />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
