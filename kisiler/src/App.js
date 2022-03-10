import React, {useEffect, useState } from 'react';
import './App.css';
import Home from './Home';
import { auth } from './firebase';
import Login from './Login';

function App() {
  const [user, setUser] = useState(null);
useEffect(() => {
auth.onAuthStateChanged(authUser => {
  if(authUser){
    setUser(authUser);
  }
  else{
    setUser(null);
  }
});
}, []);
console.log(user);
  return (
    <div className="app">
     {
       user ? <Home user ={user}/> : <Login/>
     }
    </div>
  );
}

export default App;
