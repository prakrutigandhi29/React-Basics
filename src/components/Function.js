import React from 'react';

function Function() {
   function callEvent(){
        console.log("Button Clicked")
    }
  return( <div>
      <button onClick={callEvent}>Click</button>
  </div>);
}

export default Function;
