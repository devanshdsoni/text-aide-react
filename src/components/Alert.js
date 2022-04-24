import React from "react";

function Alert(props) {
  return (
    <div
      style={{
        height: "60px",
        textAlign: "center",
        position: "fixed",
        bottom: "8px",
        right: "8px",
      }}
    >
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible px-3`}
          role="alert"
        >
          <strong>
            {props.alert.type.replace(
              props.alert.type[0],
              props.alert.type[0].toUpperCase()
            )}{" "}
          </strong>{" "}
          : {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
