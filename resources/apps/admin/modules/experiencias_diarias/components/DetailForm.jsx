import {useState, useRef, useEffect} from "react";
import {useFormContext} from "react-hook-form";
import {range} from "lodash";

const meses = {
  Enero: 31,
  Febrero: 29,
  Marzo: 31,
  Abril: 30,
  Mayo: 31,
  Junio: 30,
  Julio: 31,
  Agosto: 31,
  Septiembre: 30,
  Octubre: 31,
  Noviembre: 30,
  Diciembre: 31,
}

export const DetailForm = () => {
  const [dias, setDias] = useState([]);
  const {register, watch, setValue, formState: {errors}} = useFormContext();

  const {id, mes, nuevo_mes} = watch()

  useEffect(() => {
    $('.datepicker').datepicker({format: "yyyy-mm-dd"});
  }, []);

  useEffect(() => {
    if (id === '') {
      setValue('dia', '')
      if (mes) {
        setDias(range(1, meses[mes] + 1))
      }
    }
  }, [mes]);

  useEffect(() => {
    if (id !== '') {
      setValue('nuevo_dia', '')
      if (nuevo_mes) {
        setDias(range(1, meses[nuevo_mes] + 1))
      }
    }
  }, [nuevo_mes]);

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="form-group mb-3">
              <div className="card-header">
                <h3>Información general</h3>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-2">
                    <label className="form-label">Titulo</label>
                    <input type="text" className="form-control" {...register("titulo")}/>
                    <p className="text-danger">{errors.titulo?.message}</p>
                  </div>
                  <div className="col-sm-12 col-lg-4 col-xl-4 mt-2">
                    <label className="form-label">Fecha</label>
                    <input type="text" className="form-control datepicker" {...register("fecha")}/>
                    <p className="text-danger">{errors.fecha?.message}</p>
                  </div>
                </div>
                {
                  id === ''
                    ? (
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-2">
                          <label className="form-label">Mes</label>
                          <select name="recaptcha_status" className="form-control" {...register("mes")}>
                            <option value="">Seleccione...</option>
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
                          <p className="text-danger">{errors.mes?.message}</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-2">
                          <label className="form-label">Dia</label>
                          <select name="recaptcha_status" className="form-control" {...register("dia")}
                                  disabled={mes === ''}>
                            <option value="">Seleccione...</option>
                            {dias.map(dia => (<option value={dia} key={dia}>{dia}</option>))}
                          </select>
                          <p className="text-danger">{errors.dia?.message}</p>
                        </div>
                      </div>
                    )
                    : (
                      <>
                        <div className="row">
                          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-2">
                            <label className="form-label">Mes (Actual)</label>
                            <input type="text" className="form-control" {...register("mes")} readOnly={true}/>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-2">
                            <label className="form-label">Dia (Actual)</label>
                            <input type="text" className="form-control" {...register("dia")} readOnly={true}/>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-2">
                            <label className="form-label">Mes</label>
                            <select name="recaptcha_status" className="form-control" {...register("nuevo_mes")}>
                              <option value="">Seleccione...</option>
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
                          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-2">
                            <label className="form-label">Dia</label>
                            <select name="recaptcha_status" className="form-control" {...register("nuevo_dia")}
                                    disabled={nuevo_mes === ''}>
                              <option value="">Seleccione...</option>
                              {dias.map(dia => (<option value={dia} key={dia}>{dia}</option>))}
                            </select>
                          </div>
                        </div>
                      </>
                    )
                }

                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-2">
                    <label className="form-label">Autor</label>
                    <input type="text" className="form-control" {...register("autor")}/>
                    <p className="text-danger">{errors.autor?.message}</p>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-2">
                    <label className="form-label">Area</label>
                    <input type="text" className="form-control" {...register("area")}/>
                    <p className="text-danger">{errors.area?.message}</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <label className="form-label">Contenido</label>
                    <textarea className="form-control snote" style={{height: '150px'}} {...register("contenido")}>
                    </textarea>
                    <p className="text-danger">{errors.contenido?.message}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};