import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {onSetBreadCrumbs} from '../../../store'

export const useBreadcrumbs = (name, hasAction = false, actionBtn = null) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onSetBreadCrumbs({name, hasAction, actionBtn}))
  }, [])
}