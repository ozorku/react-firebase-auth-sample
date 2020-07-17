import React from "react";
import GoogleAuth from "../components/GoogleAuth";

const AuthPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl mb-20">Choose option</h1>
      <div>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default AuthPage;
