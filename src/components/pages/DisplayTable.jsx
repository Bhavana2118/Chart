import React from 'react'
import Records from '../../records.json';
import "../../components/Styles.css";

const DisplayTable = () => {
  return (
    <div>
      <table>
   
  <tr className='thead'>
    <th>id</th>
    <th>Year</th>
    <th>Medals</th>
  </tr>
      {
        Records && Records.map( record => {
          return(
  <tr key={ record.Id}>
    <td>{record.Id}</td>
    <td>{record.Year}</td>
    <td>{record.Medals}</td>
  </tr>
          )
        })
      }
      </table>
    </div>
  )
}

export default DisplayTable