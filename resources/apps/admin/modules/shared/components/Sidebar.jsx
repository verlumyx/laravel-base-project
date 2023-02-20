import {useEffect, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import {PATH_DASHBOARD, PATH_EXPERIENCIAS_DIARIAS} from "../../../router/AppRouter";

export const Sidebar = () => {
  const [dropdownSetting, setDropdownSetting] = useState(false);

  const handleDropSetting = () => {
    setDropdownSetting(prevState => !prevState)
  }

  const patch = useLocation()

  return (
    <>
      <div className="main-sidebar">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <a href="#">Admin Panel</a>
          </div>
          <div className="sidebar-brand sidebar-brand-sm">
            <a href="#"></a>
          </div>

          <ul className="sidebar-menu">

            <li className={patch.pathname === PATH_DASHBOARD ? `active` : ''}>
              <NavLink className="nav-link" to={PATH_DASHBOARD}>
                <i className="fas fa-columns"></i>
                <span>Dashboard</span>
              </NavLink>
            </li>

            <li className={patch.pathname === PATH_EXPERIENCIAS_DIARIAS ? `active` : ''}>
              <NavLink className="nav-link" to={PATH_EXPERIENCIAS_DIARIAS}>
                <i className="fas fa-calendar-alt"></i>
                <span>Experiencias Diarias</span>
              </NavLink>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};