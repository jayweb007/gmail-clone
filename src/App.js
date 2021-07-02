import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { userLogin } from "./features/userSlice";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();

  //Here we use this as Cookie to check if user is still logged in
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(
        userLogin({
          displayName: user?.displayName,
          email: user?.email,
          photo: user?.photoURL,
        })
      );
    });
  }, []);

  return (
    <Router>
      <Switch>
        {!user ? (
          <Route exact path="/">
            <Login />
          </Route>
        ) : (
          <Route path="/inbox">
            <Header />
            <Main />
          </Route>
        )}
      </Switch>
    </Router>
  );
}

export default App;
