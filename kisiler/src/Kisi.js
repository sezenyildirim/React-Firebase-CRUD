import React from 'react';
import db from './firebase';
import './Kisi.css';

function Kisi({id, name, lastname, name1, lastname1, setLastName, setName})  {
    const sil = () => {
        db.collection("kisiler").doc(id).delete();
    };
    const guncelle = () => {
        db.collection("kisiler").doc(id).update({
            name:name1,
            lastname:lastname1
        });
        setLastName("");
        setName("");
    };
    return (
        <div className='kisi'>
            <h3>{name} {lastname}</h3>
            <button onClick={sil}>Sil</button>
            <button onClick={guncelle}>Güncelle</button>
        </div>
    );
}

export default Kisi;
