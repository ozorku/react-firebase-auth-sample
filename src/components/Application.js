import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth } from "../firebase";
import Auths from "./Auths";

function App() {
  const user = useContext(UserContext);
  return user ? (
    // user logged in
    <div className="h-screen flex flex-col items-center justify-center">
      <div> Welcome {user.displayName}</div>
      <button
        className="text-red-600 text-sm mt-10"
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign out
      </button>
    </div>
  ) : (
    //  user not logged in

    <Auths />
  );
}

export default App;
