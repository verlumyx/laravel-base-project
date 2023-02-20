import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import moment from 'moment';

import {getAxioApi} from "../../shared/api/axioApi";


const meses = {
  1: 'Enero',
  2: 'Febrero',
  3: 'Marzo',
  4: 'Abril',
  5: 'Mayo',
  6: 'Junio',
  7: 'Julio',
  8: 'Agosto',
  9: 'Septiembre',
  10: 'Octubre',
  11: 'Noviembre',
  12: 'Diciembre',
}


const filterData = {
  mes: meses[moment().format('M')],
}

export const schemaValidate = yup.object({
}).required();

export const useExperienciasDiariasListarHooks = () => {
  const [rows, setRows] = useState([]);
  const [filters, setFilter] = useState(filterData);

  const methodsForms = useForm({
    defaultValues: filterData,
    resolver: yupResolver(schemaValidate)
  });

  const startGetData = async (
    filtros = filters
  ) => {
    try {
      const {data} = await getAxioApi(`/api/experiencias_diarias?${$.param({filters: filtros})}`);
      setFilter(filtros)
      setRows(data.content.data)
    } catch (error) {
      console.log(error)
    }
  }

  const startFilters = async (data) => {
    await startGetData(data)
  }

  useEffect(() => {
    startGetData(filters)
  }, []);

  return {
    rows,
    methodsForms,
    startFilters,
    startGetData,

  }
}