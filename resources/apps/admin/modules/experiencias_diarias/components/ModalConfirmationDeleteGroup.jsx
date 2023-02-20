import {useExperienciasDiariasRepositoryHooks} from "../hooks/useExperienciasDiariasRepositoryHooks";

export const ModalConfirmationDeleteGroup = ({row, startGetData}) => {

  const {startDetele} = useExperienciasDiariasRepositoryHooks()

  const deleteData = async (event) => {
    event.preventDefault()
    startDetele(row.id)
      .then(() => {
        startGetData()
      })
      .catch(() => {
        console.log("catch")
      })
  }

  return (
    <div className="modal fade" id={`Modal${row.id}`} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Borrar Reflexion Diaria</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row text-center">
              <h3>Esta seguro que desea <strong>borrar</strong> el Reflexion Diaria: <strong
                className="text-dark">{row.titulo}</strong></h3>
            </div>
            <div className="form-group mt_30">
              <button
                type="button"
                onClick={deleteData}
                className="btn btn-danger btn-block"
                data-dismiss="modal"
                aria-label="Close"
              >
                Borrar
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-block"
                data-dismiss="modal"
                aria-label="Close"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};