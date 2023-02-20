import {forEach} from "lodash";
import {toast} from "react-toastify";

export const useToastMessage = () => {

  const toastError = (message) => {

    if (Array.isArray(message)) {
      forEach(message, (msg) => {
        toast.error(msg)
      })
      return;
    }

    if (typeof message === "object") {
      forEach(message, (msg) => {
        if (Array.isArray(msg)) {
          forEach(msg, (text) => {
            toast.error(text)
          })
        } else {
          toast.error(msg)
        }
      })
      return;
    }

    toast.error(message)
  }

  const toastSuccess = (message = "Operación realizada con éxito.") => {
    if (Array.isArray(message)) {
      forEach(message, (msg) => {
        toast.success(msg)
      })
      return;
    }
    toast.success(message)
  }

  const toastInfor = (message) => {
    if (Array.isArray(message)) {
      forEach(message, (msg) => {
        toast.info(msg)
      })
      return;
    }
    toast.info(message)
  }

  const toastWarning = (message) => {
    if (Array.isArray(message)) {
      forEach(message, (msg) => {
        toast.warning(msg)
      })
      return;
    }
    toast.warning(message)
  }

  return {
    toastSuccess,
    toastWarning,
    toastError,
    toastInfor,
  }
}