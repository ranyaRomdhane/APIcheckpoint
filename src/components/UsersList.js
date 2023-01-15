import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardApi from './CardApi';

function UsersList() {
    const [users, setusers] = useState([]);
    useEffect(() => {
try {
     axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            setusers(res.data);
        });
} catch (error) {
    console.log(error);
    
}
    }, []);
    console.log(users);
    
  return <div className='car'>
    {users.map((el) => (
<CardApi users={el} />
    ))}
  </div>;
  
}

export default UsersList