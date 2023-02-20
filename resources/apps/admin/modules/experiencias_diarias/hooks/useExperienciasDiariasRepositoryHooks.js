import {useToastMessage} from "../../shared/hooks";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import {deleteAxioApi, getAxioApi, postAxioApi, putAxioApi} from "../../shared/api/axioApi";
import moment from "moment";

const reflexionesDiariasData = () => {
  return {
    id: '',
    fecha: moment().format('YYYY-MM-DD'),
    dia: '',
    nuevo_dia: '',
    mes: '',
    nuevo_mes: '',
    titulo: '',
    contenido: '',
    autor: '',
    area: '',
  }
}

const schemaValidate = yup.object({
  dia: yup.string().required('El campo es requerido.'),
  mes: yup.string().required('El campo es requerido.'),
  fecha: yup.string().required('El campo es requerido.'),
  titulo: yup.string().required('El campo es requerido.'),
  contenido: yup.string().required('El campo es requerido.'),
  autor: yup.string().required('El campo es requerido.'),
  area: yup.string().required('El campo es requerido.'),
}).required();

export const useExperienciasDiariasRepositoryHooks = () => {
  const {toastError, toastSuccess} = useToastMessage()

  const methodsForms = useForm({
    defaultValues: reflexionesDiariasData(),
    resolver: yupResolver(schemaValidate)
  });

  const startCreate = async (data) => {
    try {
      await postAxioApi('/api/experiencia_diaria', data);
      toastSuccess()
    } catch (error) {
      toastError(error.response.data.error)
      throw Error(error.response.data.error);
    }
  }

  const startUpdate = async (data) => {
    try {
      await putAxioApi('/api/experiencia_diaria', data);
      toastSuccess()
    } catch (error) {
      toastError(error.response.data.error)
      throw Error(error.response.data.error);
    }
  }

  const startGet = async (id) => {
    try {
      const {data} = await getAxioApi(`/api/experiencia_diaria/${id}`);

      await methodsForms.reset(data.content.data)
    } catch (error) {
      toastError(error.response.data.error)
      throw Error(error.response.data.error);
    }
  }

  const startDetele = async (id) => {
    try {
      await deleteAxioApi(`/api/experiencia_diaria/${id}`);
      toastSuccess()
    } catch (error) {
      toastError(error.response.data.error)
      throw Error(error.response.data.error);
    }
  }

  return {
    methodsForms,

    startGet,
    startUpdate,
    startDetele,
    startCreate
  }
}