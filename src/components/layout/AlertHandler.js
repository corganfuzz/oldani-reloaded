import React from "react";

export const AlertHandler = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alet-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    )
  );
};
