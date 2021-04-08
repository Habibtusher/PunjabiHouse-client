
import firebase from "firebase/app";
import "firebase/auth";
import { useContext, useState } from 'react';
import { useHistory, useLocation } from "react-router";
import {UserContext} from "../../App"

import firebaseConfig from "./Firebase.Config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
function Login() {
const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };


 
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
      .then((res) => {
        const { displayName, email} = res.user;
        const signedInUser = {name: displayName, email: email}
        console.log(res);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      })
  }

  return (
    <div style={{ textAlign: 'center' }}>
    <button className="btn btn-outline-danger pl-5 pr-5 mt-5"onClick={handleSignIn}>Continue With Google</button>

    </div>
  );
}

export default Login;
