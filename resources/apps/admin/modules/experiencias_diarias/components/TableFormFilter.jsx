import {range} from "lodash";
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

export const TableFormFilter = ({methodsForms, startFilters}) => {

  const {register} = methodsForms;
  const hoy = Date.now();

  return (
    <form onSubmit={methodsForms.handleSubmit(startFilters)}>
      <div className="row my-3">
        <div className="col-12 col-lg-4">
          <select name="mes" className="form-control" {...register("mes")}>
            <option value="Enero">Enero</option>
            <option value="Febrero">Febrero</option>
            <option value="Marzo">Marzo</option>
            <option value="Abril">Abril</option>
            <option value="Mayo">Mayo</option>
            <option value="Junio">Junio</option>
            <option value="Julio">Julio</option>
            <option value="Agosto">Agosto</option>
            <option value="Septiembre">Septiembre</option>
            <option value="Octubre">Octubre</option>
            <option value="Noviembre">Noviembre</option>
            <option value="Diciembre">Diciembre</option>
          </select>
        </div>
        <div className="col-12 col-lg-4">
          <button type="submit" className="btn btn-primary" style={{color: "white"}}>
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
};