import React from 'react';
import { timestampToDate } from './utils';

const DataTable = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h4>{`${data.base} ${timestampToDate(data.timestamp)}`}</h4>
      <table>
        <tbody>
          {Object.entries(data.rates).map(([key, value]) => {
            return (
              <tr key={key}>
                <td style={{ textAlign: 'start' }}>{key}</td>
                <td style={{ textAlign: 'end' }}>{value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
