import React from "react";
import { auth, provider } from "../firebase";

const Auths = () => {
  const handleAuth = () => {
    auth.signInWithPopup(provider);
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl mb-20">Choose option</h1>
      <div>
        <button
          onClick={() => handleAuth()}
          className="bg-red-500 px-8 py-2 rounded-full text-white"
        >
          Signin with Google
        </button>
      </div>
    </div>
  );
};

export default Auths;
