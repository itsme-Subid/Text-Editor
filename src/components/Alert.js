import React from "react";

export default function Alert(props) {
  return (
    props.alert && (
      <div>
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">{props.alert}</h4>
        </div>
      </div>
    )
  );
}
