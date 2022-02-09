import React from 'react';

function MemoComponent({name}) {
    console.log("Memo Component Renderding");
  return <div>
      {name}
  </div>;
}

export default React.memo(MemoComponent);
