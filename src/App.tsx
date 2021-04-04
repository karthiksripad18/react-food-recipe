import React from 'react';
import './App.css';

import {auth, provider} from './firebase';
import { useDispatch, useSelector } from 'react-redux';

import {
  setActiveUser,
  setUserLogOutState,
  selectUserName,
  selectUserEmail
} from './redux/userSlice';

function App() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  const handleSignIn = () => {
    auth.signInWithPopup(provider).then(
      (result) => {
        dispatch(
          setActiveUser({
            userName: result.user?.displayName,
            userEmail: result.user?.email
          })
        )
      }
    ).catch(
      (error) => {
        console.log("####################");
      }
    )
  };

  const handleSignOut = () => {
    auth.signOut().then(
      () => dispatch(setUserLogOutState())
    )
    .catch(
      (error) => alert(error.message)
    )
  };

  return (
    <div className="App">
      {
        userName ? (
          <>
          <h1>{userName}</h1>
          <button onClick={handleSignOut}>Sign Out</button>
          </>
        ) : (
          <button onClick={handleSignIn}>Sign In</button>
        )
      }
    </div>
  );
}

export default App;
