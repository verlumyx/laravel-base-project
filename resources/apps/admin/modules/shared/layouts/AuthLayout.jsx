import React from 'react';
import {Outlet} from "react-router-dom";

export const AuthLayout = () => {
  return (
    <>
      <div className="main-wrapper">
        <section className="section">
          <div className="container container-login">

            <div className="row">
              <div
                className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                <div className="card card-primary border-box">
                  <Outlet/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}