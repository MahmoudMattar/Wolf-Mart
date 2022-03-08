import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Checkout from "./components/checkout/Checkout";
import Home from "./Home";
import Login from "./Pages/Login";
import { auth } from "./firebase";
import { useStateValue } from "./components/Context/StateProvider";
import Payment from "./Pages/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./App.css";
import Orders from "./components/Orders/Orders";

const promise = loadStripe(
  "pk_test_51Hz6kSKELfugVTBI236RZqs4Q7VFNYLXRABPDeRQDoyPwoWf7YIEXFPHIGHL9l2p6ktjxhgdOCQHYbey61rFhUdH00UeSfVRB6"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/orders">
              <Header />
              <Orders />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
