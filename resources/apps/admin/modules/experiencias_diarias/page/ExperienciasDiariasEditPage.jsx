import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {FormProvider} from "react-hook-form";

import {useBreadcrumbs} from "../../shared/hooks";
import {useExperienciasDiariasRepositoryHooks} from "../hooks/useExperienciasDiariasRepositoryHooks";

import {PATH_EXPERIENCIAS_DIARIAS} from "../../../router/AppRouter";
import {ButtonForm, DetailForm} from "../components";

const ExperienciasDiariasEditPage = () => {
  const {id} = useParams()
  const navidate = useNavigate()

  useBreadcrumbs('Experiencias Diarias', false)
  const distritoRepository = useExperienciasDiariasRepositoryHooks()
  const {methodsForms, startGet, startUpdate} = distritoRepository
  const {formState: {isSubmitSuccessful}} = methodsForms;

  const getInit = async () => {
    await startGet(id)
  }

  useEffect(() => {
    getInit()
  }, [])

  useEffect(() => {
    if (isSubmitSuccessful) {
      navidate(PATH_EXPERIENCIAS_DIARIAS)
    }
  }, [isSubmitSuccessful]);

  return (
    <>
      <FormProvider {...methodsForms}>
        <form onSubmit={methodsForms.handleSubmit(startUpdate)}>
          <DetailForm/>
          <ButtonForm/>
        </form>
      </FormProvider>
    </>
  );
};

export default ExperienciasDiariasEditPage
