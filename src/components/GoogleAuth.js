import React from "react";

const GoogleAuth = () => {
  const handleAuth = () => {
    alert();
  };
  return (
    <button
      onClick={() => handleAuth()}
      className="bg-red-500 px-8 py-2 rounded-full text-white"
    >
      Signin with Google
    </button>
  );
};

export default GoogleAuth;
