import React from 'react';
import ReactDOM from 'react-dom';
function Portals() {
  return ReactDOM.createPortal(<h1>
      Hello!
  </h1>,document.getElementById("Portal-demo"));
}

export default Portals;
