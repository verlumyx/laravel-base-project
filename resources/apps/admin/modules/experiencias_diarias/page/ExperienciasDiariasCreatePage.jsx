import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {FormProvider} from "react-hook-form";

import {useExperienciasDiariasRepositoryHooks} from "../hooks/useExperienciasDiariasRepositoryHooks";
import {useBreadcrumbs} from "../../shared/hooks";
import {DetailForm, ButtonForm} from "../components";

import {PATH_EXPERIENCIAS_DIARIAS} from "../../../router/AppRouter";

const ExperienciasDiariasCreatePage = () => {
  const navidate = useNavigate()

  useBreadcrumbs('Experiencias Diarias', false)
  const distritoRepository = useExperienciasDiariasRepositoryHooks()
  const {methodsForms, startCreate} = distritoRepository
  const {formState: {isSubmitSuccessful}} = methodsForms;


  useEffect(() => {
    if (isSubmitSuccessful) {
      navidate(PATH_EXPERIENCIAS_DIARIAS)
    }
  }, [isSubmitSuccessful]);

  return (
    <>
      <FormProvider {...methodsForms}>
        <form onSubmit={methodsForms.handleSubmit(startCreate)}>
          <DetailForm/>
          <ButtonForm/>
        </form>
      </FormProvider>
    </>
  );
};

export default ExperienciasDiariasCreatePage