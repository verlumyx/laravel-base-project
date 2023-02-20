import React from 'react';
import {AppRouter} from "./router/AppRouter";
import {ToastContainer} from "react-toastify";
export const AdminApp = () => {
  return (
    <>
      <AppRouter/>
      <ToastContainer/>
    </>
  );
};