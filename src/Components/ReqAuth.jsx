import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

const ReqAuth = () => {
  if (!auth){
    return (
      <div>
        <Navigate to="/" />
      </div>
    );
  }
};

export default ReqAuth;
