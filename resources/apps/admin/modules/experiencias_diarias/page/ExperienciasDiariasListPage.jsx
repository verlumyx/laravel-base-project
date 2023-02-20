import {useNavigate} from "react-router-dom";

import {useBreadcrumbs} from "../../shared/hooks";
import {useExperienciasDiariasListarHooks} from "../hooks/useExperienciasDiariasListarHooks";

import {PATH_EXPERIENCIAS_DIARIAS_CREAR} from "../../../router/AppRouter";
import {TableFormFilter, TableGroup} from "../components";
import React from "react";

const ExperienciasDiariasListPage = () => {
  const navigate = useNavigate()
  const {
    rows,
    methodsForms,
    startGetData,
    startFilters
  } = useExperienciasDiariasListarHooks()

  const toCreate = (event) => {
    event.preventDefault()
    navigate(PATH_EXPERIENCIAS_DIARIAS_CREAR)
  }

  useBreadcrumbs('Experiencias Diarias', true, toCreate)

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <TableFormFilter methodsForms={methodsForms} startFilters={startFilters}/>
              <TableGroup rows={rows} startGetData={startGetData}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienciasDiariasListPage