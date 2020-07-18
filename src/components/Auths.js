import React from "react";
import {
  auth,
  googleProvider,
  twitterProvider,
  githubProvider,
} from "../firebase";

const Auths = () => {
  const handleSignin = (provider) => {
    auth.signInWithPopup(provider);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl mb-10">Choose option</h1>
      <div className="flex flex-col">
        {/* google signin */}
        <button
          onClick={() => handleSignin(googleProvider)}
          className="bg-red-500 px-8 py-2 rounded-full text-white"
        >
          Signin with Google
        </button>
        {/* twitter signin */}
        <button
          onClick={() => handleSignin(twitterProvider)}
          className="mt-5 bg-blue-500 px-8 py-2 rounded-full text-white"
        >
          Signin with Twitter
        </button>
        {/* github signin */}
        <button
          onClick={() => handleSignin(githubProvider)}
          className="mt-5 bg-black px-8 py-2 rounded-full text-white"
        >
          Signin with Github
        </button>
      </div>
    </div>
  );
};

export default Auths;
