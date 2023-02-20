import {NavLink} from "react-router-dom";
import {PATH_EXPERIENCIAS_DIARIAS_EDITAR} from "../../../router/AppRouter";
import {ModalConfirmationDeleteGroup} from "./";

export const TableGroup = ({rows, startGetData}) => {
  return (
    <table className="table table-hover table-responsive-lg">
      <thead>
      <tr>
        <th scope="col" style={{padding: '.75rem'}}>Titulo.</th>
        <th scope="col" style={{padding: '.75rem'}}>Dia</th>
        <th scope="col" style={{padding: '.75rem'}}>Mes</th>
        <th scope="col" style={{padding: '.75rem'}}>Auto</th>
        <th scope="col" width="150px" style={{padding: '.75rem'}}></th>
        <th scope="col" width="150px" style={{padding: '.75rem'}}></th>
      </tr>
      </thead>
      <tbody>

      {
        rows.map(row => (
          <tr key={row.id}>
            <td>{row.titulo}</td>
            <td>{row.dia}</td>
            <td>{row.mes}</td>
            <td>{row.autor}</td>
            <td>
              <NavLink to={PATH_EXPERIENCIAS_DIARIAS_EDITAR.replace(':id', row.id)} className="btn btn-outline-info">
                Editar <i className="fas fa-edit"></i>
              </NavLink>
            </td>
            <td>
              <button
                className="btn btn-outline-danger"
                data-toggle="modal"
                data-target={`#Modal${row.id}`}
              >
                Eliminar <i className="fas fa-trash"></i>
              </button>
              <ModalConfirmationDeleteGroup row={row} startGetData={startGetData}/>
            </td>
          </tr>
        ))
      }
      </tbody>
    </table>
  );
};