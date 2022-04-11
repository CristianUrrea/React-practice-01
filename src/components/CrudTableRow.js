import React from 'react';

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {

  let { name, anime, id } = el;

  let myStyles = {
      display:"flex",
      justifyContent:"space-around",
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{anime}</td>
      <td style={myStyles}>
        <button className="btn btn-outline-primary" onClick={() => setDataToEdit(el)}>Editar</button>
        <button className="btn btn-outline-primary" onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  )
}

export default CrudTableRow
