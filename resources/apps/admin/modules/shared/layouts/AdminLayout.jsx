import {useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {Navbar, Sidebar} from "../components";

export const AdminLayout = () => {
  const {name, hasAction, actionBtn} = useSelector(state => state.breadcrumbs);

  return (
    <>
      <div className="main-wrapper">
        <Navbar/>
        <Sidebar/>
        <div className="main-content">
          <section className="section">

            <div className="section-header">
              <h1>{name}</h1>
              {
                hasAction ? (
                  <div className="ml-auto">
                    <a href="#" className="btn btn-primary" onClick={actionBtn}><i className="fas fa-plus"></i> Nuevo</a>
                  </div>
                ) : null
              }
            </div>
            <div className="section-body">
              <Outlet/>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};