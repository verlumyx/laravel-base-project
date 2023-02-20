import React from 'react';
import {TailSpin} from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: '500px'}}>
      <TailSpin
        height="80"
        width="80"
        color="#6777ef"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};