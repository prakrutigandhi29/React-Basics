import React from 'react';
import Fragmentcolumns from './Fragmentcolumns';
function table() {
  return <React.Fragment>
      <table>
          <tbody>
              <tr>
                  <Fragmentcolumns/>
              </tr>
          </tbody>
      </table>
  </React.Fragment>;
}

export default table;
