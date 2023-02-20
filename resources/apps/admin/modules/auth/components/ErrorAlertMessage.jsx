import React from 'react';

export const ErrorAlertMessage = ({errorMessage}) => {
  return (
    <div className="alert alert-danger" role="alert">
      {errorMessage}
    </div>
  );
};