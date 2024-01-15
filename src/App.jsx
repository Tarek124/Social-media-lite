/* eslint-disable no-unused-vars */
import Header from "./components/Header/Header";
import "./App.css";
import Sideber from "./components/Sideber/Sideber";
import AllState from "./store/store";
import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from "./firebase.config";
import * as firebase from "firebase/app";

firebase.initializeApp(firebaseConfig);

export default function App() {
  const [route, setroute] = useState(false);
  const [Login, setLogin] = useState(false);
  const [User, setUser] = useState("");
  const googleAuth = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        setLogin(true);
        setUser(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
console.log(User)
  return Login ? (
    <AllState>
      <Header route={route} setroute={setroute} User={User} />
      <Sideber route={route} setroute={setroute} />
    </AllState>
  ) : (
    <div className="flex justify-center items-center h-[100vh] flex-col px-4 auth">
      <span className="my-4 text-2xl text-center text-white font-semibold tracking-wider">
        Please Create a Account for using this App
      </span>
      <div className="mt-2" onClick={googleAuth}>
        <button className="bn29">Google</button>
      </div>
    </div>
  );
}
