import React, { useEffect,useState } from 'react';
import db, { auth } from './firebase';
import './Home.css';
import Kisi from './Kisi';

function Home  ({user})  {
    const[name, setName] = useState("");
    const[lastname, setLastName] = useState("");
    const [kisiler, setKisiler] = useState([]);
    useEffect(() => {
        db.collection("kisiler").onSnapshot(snapshot =>
            setKisiler(snapshot.docs.map(doc => ({
                
                id:doc.id,
                data:doc.data(),
            }))
            )
        );
        

    }, []);
    console.log(kisiler);


    const add = (e) => {
        e.preventDefault();
        db.collection("kisiler").add({
            name:name,
            lastname:lastname
        });
        setName("");
        setLastName("");
    };
    return (
        <div className='home'>
            <h4>Hoşgeldiniz {user.displayName}</h4>
            <button onClick={() => auth.signOut()}>Çıkış Yap</button>
            <form>
                İsim<input type="text" value={name} onChange={(e) => setName(e.target.value)}/><br/>
                Soyisim<input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)}/>
                <button onClick={add}>Ekle</button>
            </form>
            <div className='home_kisiler'>
                {kisiler.map(({id,data}) => (
                   <Kisi key={id} id={id} 
                   name={data.name} 
                   lastname={data.lastname} 
                   lastname1={lastname} 
                   name1={name} 
                   setLastName={setLastName} 
                   setName={setName}
                    />

                ))}

            </div>
        </div>
    );
}

export default Home
