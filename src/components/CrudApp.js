import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

// Datos
const initialDB = [
    {
        id: 1,
        name: 'Rem',
        anime: "Re:Zero"
    },
    {
        id: 2,
        name: 'Zero Two',
        anime: "Darling in The Franxx"
    },
    {
        id: 3,
        name: 'Kaguya',
        anime: "Love Is War"
    },
    {
        id: 4,
        name: 'Miku',
        anime: "The Quintessential Quintuplets"
    },
    {
        id: 5,
        name: 'Esdeath',
        anime: "Akame Ga Kill"
    }
];

const CrudApp = () => {
    const [db, setDb] = useState(initialDB);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id = Date.now();
        setDb([...db, data]);
    };
    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id ? data : el);
        setDb(newData);
    };
    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar el registo con el id '${id}'?`);
        if (isDelete) { let newData = db.filter(el => el.id !== id); setDb(newData); } else { return; }
    };

    return (
        <div>
            <h2>CRUD App</h2>
            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
            <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
        </div>
    )
}

export default CrudApp;