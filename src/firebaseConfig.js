import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBFXyof32egwWzFgMee4q5fdBkB3DzYouc",
  authDomain: "azizahadovv-portfolio.firebaseapp.com",
  projectId: "azizahadovv-portfolio",
  storageBucket: "azizahadovv-portfolio.appspot.com",
  messagingSenderId: "976805344401",
  appId: "1:976805344401:web:898a100ad21b03b832fb30",
  measurementId: "G-F1MBME0GEF"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// 1)
/* 

import firebase from "firebase/app";
import "firebase/auth";

const config = firebase.initializeApp({
 apiKey: "AIzaSyAQR6hf80azwg5-qAdNOcehQAp7lo7GUd8",
 authDomain: "auth-project-ea337.firebaseapp.com",
 projectId: "auth-project-ea337",
 storageBucket: "auth-project-ea337.appspot.com",
 messagingSenderId: "584614356477",
 appId: "1:584614356477:web:9f2d6b52fa9b748f946594",
 measurementId: "G-72CJDF8NPK"
});

export const auth = firebase.auth();

*GOOGLE AUTH INTEGRATION CODELARI *

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default config;


*/

/////////////////////////////////////////// 2)


/* 
import React, { useState, useEffect } from 'react';
import Welcome from './Welcome';
import Login from './signIn/Login';
import firebase from './firebase/config';
import './style.css';

const App = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  }, [])

  return (
    <div className="app">
      {user ? <Welcome user={user} /> : <Login />}
    </div>
  );
};

export default App;

*/


//////////////////////////////////    3)
/* 



import React from 'react';
import { auth } from './firebase/config';

const Welcome = ({ user }) => {
     return (
          <div className="welcome">
               <div className="accountInfo">
                    <h1>Salom, <span></span>{user.displayName}</h1>
                    <img src={user.photoURL} alt="photo" />
               </div>
               <button className="signOutBtn" onClick={() => auth.signOut()}>
                    Sign out
               </button>
          </div>
     );
};
export default Welcome;

*/