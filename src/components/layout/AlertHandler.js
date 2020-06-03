import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const AlertHandler = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert alet-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    )
  );
};

export default AlertHandler;
