import {useNavigate} from "react-router-dom";
import {useFormContext} from "react-hook-form";
import {PATH_EXPERIENCIAS_DIARIAS} from "../../../router/AppRouter";

export const ButtonForm = () => {
  const navigate = useNavigate();
  const {formState: {isSubmitting}} = useFormContext();

  const toBack = (event) => {
    event.preventDefault()
    navigate(PATH_EXPERIENCIAS_DIARIAS)
  }

  return (
    <div className="row d-md-flex justify-content-center justify-content-md-end mb-5">
      <div className="">
        <button
          className="btn btn-secondary mr-5 px-5"
          type="button"
          disabled={isSubmitting}
          onClick={toBack}>Regresar
        </button>
        <button
          className="btn btn-primary px-5"
          type="submit"
        disabled={isSubmitting}>Guardar
        </button>
      </div>
    </div>
  );
};