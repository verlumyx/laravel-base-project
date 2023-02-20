import {useBreadcrumbs} from "../../shared/hooks";

export const DashboardPage = () => {

  useBreadcrumbs('Dashboard')

  return (
    <>
      <div className="row">

        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <div className="card card-statistic-1">
            <div className="card-icon bg-primary">
              <i className="far fa-user"></i>
            </div>
            <div className="card-wrap">
              <div className="card-header">
                <h4>Dashboard</h4>
              </div>
              <div className="card-body">
                12
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <div className="card card-statistic-1">
            <div className="card-icon bg-danger">
              <i className="fas fa-book-open"></i>
            </div>
            <div className="card-wrap">
              <div className="card-header">
                <h4>Total News</h4>
              </div>
              <div className="card-body">
                122
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <div className="card card-statistic-1">
            <div className="card-icon bg-warning">
              <i className="fas fa-bullhorn"></i>
            </div>
            <div className="card-wrap">
              <div className="card-header">
                <h4>Total Users</h4>
              </div>
              <div className="card-body">
                45
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};