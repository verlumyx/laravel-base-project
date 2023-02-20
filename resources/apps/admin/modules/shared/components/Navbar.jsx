import {useEffect} from "react";
import {useAuthStore} from "../../auth/hooks/useAuthStore";
import {useNavigate} from "react-router-dom";
import {PATH_AUTH_LOGIN} from "../../../router/AppRouter";
import {sidebarScript} from "../script/sidebarScript";

export const Navbar = () => {
  const navigator = useNavigate()
  const {user, startLogout} = useAuthStore();

  const logout = async (event) => {
    event.preventDefault()
    startLogout();
    navigator(PATH_AUTH_LOGIN)
  }

  useEffect(() => {
    sidebarScript()
  }, []);

  return (
    <>
      <div className="navbar-bg"></div>

      <nav className="navbar navbar-expand-lg main-navbar">
        <form className="form-inline mr-auto">
          <ul className="navbar-nav mr-3">
            <li><a href="#" data-toggle="sidebar" className="nav-link nav-link-lg"><i className="fas fa-bars"></i></a>
            </li>
            <li><a href="#" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i
              className="fas fa-search"></i></a></li>
          </ul>
        </form>
        <ul className="navbar-nav navbar-right">
          <li className="nav-link">
            <a href="" target="_blank" className="btn btn-warning">Front End</a>
          </li>
          <li className="dropdown">
            <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
              <img alt="image" src="/uploads/user.jpg" className="rounded-circle mr-1"/>
              <div className="d-sm-none d-lg-inline-block">{user.name}</div>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a href="#" className="dropdown-item has-icon">
                <i className="far fa-user"></i> Edit Profile
              </a>
              <a href="#" className="dropdown-item has-icon text-danger" onClick={logout}>
                <i className="fas fa-sign-out-alt"></i> Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};