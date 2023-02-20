import React, {lazy} from "react";
import {Route, Routes, Navigate} from "react-router-dom";

import Loadable from "../modules/shared/components/Loadable";

import {AdminLayout} from "../modules/shared/layouts/AdminLayout";
import {AuthLayout} from "../modules/shared/layouts/AuthLayout";

const LoginPage = Loadable(lazy(() => import("../modules/auth/page/LoginPage")));
const ForgetPasswordPage = Loadable(lazy(() => import("../modules/auth/page/ForgetPasswordPage")));
const ResetPasswordPage = Loadable(lazy(() => import("../modules/auth/page/ResetPasswordPage")));

import {DashboardPage} from "../modules/dashboard/pages/DashboardPage";
import {useAuthStore} from "../modules/auth/hooks/useAuthStore";
import {CheckingLoader} from "./CheckingLoader";


const ExperienciasDiariasListPage = Loadable(lazy(() => import("../modules/experiencias_diarias/page/ExperienciasDiariasListPage")));
const ExperienciasDiariasCreatePage = Loadable(lazy(() => import("../modules/experiencias_diarias/page/ExperienciasDiariasCreatePage")));
const ExperienciasDiariasEditPage = Loadable(lazy(() => import("../modules/experiencias_diarias/page/ExperienciasDiariasEditPage")));

export const PATH_DASHBOARD = "/dashboard"
export const PATH_EXPERIENCIAS_DIARIAS = "/experiencias_diarias"
export const PATH_EXPERIENCIAS_DIARIAS_CREAR = "/experiencias_diarias/crear"
export const PATH_EXPERIENCIAS_DIARIAS_EDITAR = "/experiencias_diarias/editar/:id"


export const PATH_AUTH_LOGIN = "/login"
export const PATH_AUTH_FORGET_PASSWORD = "/forget_password"
export const PATH_AUTH_RESET_PASSWORD = "/reset_password"

export const AppRouter = () => {
  const {status, TYPE_CHECKING, TYPE_NOT_AUTHENTICATED} = useAuthStore();

  if (status === TYPE_CHECKING) {
    return <CheckingLoader/>
  }

  return (
    <Routes>
      {status === TYPE_NOT_AUTHENTICATED
        ? (
          <Route path="/" element={<AuthLayout/>}>
            <Route path={PATH_AUTH_LOGIN} element={<LoginPage/>}/>
            <Route path={PATH_AUTH_FORGET_PASSWORD} element={<ForgetPasswordPage/>}/>
            <Route path={PATH_AUTH_RESET_PASSWORD} element={<ResetPasswordPage/>}/>

            <Route path="/*" element={<Navigate to={PATH_AUTH_LOGIN} replace/>}/>
          </Route>
        ) : (
          <Route path="/" element={<AdminLayout/>}>
            <Route path={PATH_DASHBOARD} element={<DashboardPage/>}/>
            <Route path={PATH_EXPERIENCIAS_DIARIAS} element={<ExperienciasDiariasListPage/>}/>
            <Route path={PATH_EXPERIENCIAS_DIARIAS_CREAR} element={<ExperienciasDiariasCreatePage/>}/>
            <Route path={PATH_EXPERIENCIAS_DIARIAS_EDITAR} element={<ExperienciasDiariasEditPage/>}/>

            <Route path="/*" element={<Navigate to={PATH_DASHBOARD} replace/>}/>
          </Route>
        )}
    </Routes>
  );
};