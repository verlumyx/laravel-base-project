import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';

import {useAuthStore} from "../hooks/useAuthStore";
import {ErrorAlertMessage} from "../components/ErrorAlertMessage";

import {PATH_AUTH_FORGET_PASSWORD, PATH_DASHBOARD} from "../../../router/AppRouter";

const loginDefaultValues = {
  email: '',
  password: ''
};

const loginSchemaValidation = yup.object({
  email: yup.string().email().required("El campo es requerido"),
  password: yup.string().required("El campo es requerido")
}).required();

const LoginPage = () => {
  const navigator = useNavigate()

  const {startLogin, errorMessage} = useAuthStore();

  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({
    defaultValues: loginDefaultValues,
    resolver: yupResolver(loginSchemaValidation)
  })

  const onSubmit = async (data) => {
    const response = await startLogin(data)

    if (response) {
      navigator(PATH_DASHBOARD)
    }
  }

  return (
    <>
      <div className="card-header card-header-auth">
        <h4 className="text-center">Admin Panel Login</h4>
      </div>
      <div className="card-body card-body-auth">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email Address"
              {...register("email")}
              autoFocus/>
            <p className="text-danger">{errors.email?.message}</p>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              {...register("password")}
              placeholder="password"/>
            <p className="text-danger">{errors.password?.message}</p>
          </div>
          {
            errorMessage && (
              <ErrorAlertMessage errorMessage={errorMessage} />
            )
          }
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={isSubmitting}>
              Login
            </button>
          </div>
          <div className="form-group">
            <div>
              <NavLink to={PATH_AUTH_FORGET_PASSWORD}>Forgot password?</NavLink>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage