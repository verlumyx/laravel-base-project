import React from 'react';
import * as yup from "yup";
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";

import {useAuthStore} from "../hooks/useAuthStore";

import {PATH_AUTH_LOGIN} from "../../../router/AppRouter";
import {ErrorAlertMessage} from "../components/ErrorAlertMessage";
import {SuccessAlertMessage} from "../components/SuccessAlertMessage";

export const forgotPasswordDefaultValues = {
  email: '',
};

export const forgotPasswordSchemaValidation = yup.object({
  email: yup.string().email().required("El campo es requerido"),
}).required();


const ForgetPasswordPage = () => {
  const {startForgotPassword, errorMessage, successMessage} = useAuthStore()

  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({
    defaultValues: forgotPasswordDefaultValues,
    resolver: yupResolver(forgotPasswordSchemaValidation)
  })

  const onSubmit = async (data) => {
    await startForgotPassword(data);
  }

  return (
    <>
      <div className="card-header card-header-auth">
        <h4 className="text-center">Reset Password</h4>
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
            <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={isSubmitting}>
              Send Password Reset Link
            </button>
          </div>
          {
            errorMessage && (
              <ErrorAlertMessage errorMessage={errorMessage}/>
            )
            ||
            successMessage && (
              <SuccessAlertMessage successMessage={successMessage}/>
            )
          }
          <div className="form-group">
            <div>
              <NavLink to={PATH_AUTH_LOGIN}>
                Back to login page
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgetPasswordPage