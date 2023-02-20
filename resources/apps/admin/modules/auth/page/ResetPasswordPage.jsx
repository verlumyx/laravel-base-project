import React from 'react';
import * as yup from "yup";
import queryString from "query-string"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {NavLink, useLocation, useParams} from "react-router-dom";

import {useAuthStore} from "../hooks/useAuthStore";
import {ErrorAlertMessage} from "../components/ErrorAlertMessage";
import {SuccessAlertMessage} from "../components/SuccessAlertMessage";
import {PATH_AUTH_LOGIN} from "../../../router/AppRouter";

const resetPasswordSchemaValidation = yup.object({
  password: yup.string().required("Password is a required field.")
    .min(8, "Password length should be at least 8 characters.")
    .max(16, "Password cannot exceed more than 16 characters."),
  password_confirmation: yup.string().required("Confirm Password is a required field.")
    .min(8, "Password length should be at least 8 characters.")
    .max(16, "Password cannot exceed more than 16 characters.")
    .oneOf([yup.ref("password")], "Your passwords do not match.")
}).required();

const ResetPasswordPage = () => {
  const location = useLocation();
  const {email, token} = queryString.parse(location.search)

  const {startResetPassword, successMessage, errorMessage} = useAuthStore()

  const {register, handleSubmit, watch, formState: {errors, isSubmitting}} = useForm({
    defaultValues: {
      email: email,
      token: token,
      password: '',
      password_confirmation: ''
    },
    resolver: yupResolver(resetPasswordSchemaValidation)
  })

  const onSubmit = async (data) => {
    await startResetPassword(data);
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
              type="password"
              className="form-control"
              placeholder="Password"
              {...register("password")}
            />
            <p className="text-danger">{errors.password?.message}</p>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Retype Password"
              {...register("password_confirmation")}
              />
            <p className="text-danger">{errors.password_confirmation?.message}</p>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Submit
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

export default ResetPasswordPage