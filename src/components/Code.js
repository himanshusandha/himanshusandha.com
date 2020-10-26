import React from "react";
import "../styles/components/Code.css";

function Code(props) {
  return (
    <div className="code_base">
      <pre>{props.data}</pre>
    </div>
  );
}

export default Code;
