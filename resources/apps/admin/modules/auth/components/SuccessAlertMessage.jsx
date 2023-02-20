import React from 'react';
export const SuccessAlertMessage = ({successMessage}) => {
  return (
    <div className="alert alert-success" role="alert">
      {successMessage}
    </div>
  );
};