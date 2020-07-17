import React from "react";
import { Router } from "@reach/router";
import HomePage from "./views/Home";
import AuthPage from "./views/Auth";

function App() {
  const user = "";
  return user ? (
    <HomePage path="/home" />
  ) : (
    <Router>
      <AuthPage path="/" />
    </Router>
  );
}

export default App;
