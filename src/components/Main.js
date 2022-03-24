import React, { useState } from "react";

export default function Main() {
  const [state, setState] = useState("Yes");

  function toggle() {
    setState(() => (state === "Yes" ? "No" : "Yes"));
  }

  return (
    <div className="main">
      <div className="question">
        <h1>Will you visit SeaSide Resort Today?</h1>
      </div>

      <div>
        <button onClick={toggle} className="answer">
          <h1>{state}</h1>
        </button>
      </div>
    </div>
  );
}
