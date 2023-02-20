import React from 'react';
import {useEffect} from "react";

import {useAuthStore} from "../modules/auth/hooks/useAuthStore";

import {Loader} from "../modules/shared/components/Loader";

export const CheckingLoader = () => {
  const {checkingAuth} = useAuthStore()

  useEffect(() => {
    checkingAuth()
  }, []);

  return (
    <>
      <Loader/>
    </>
  );
}