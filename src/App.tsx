import React from 'react'
import axios  from 'axios'
import { useState, useEffect} from 'react';
import { AxiosError } from 'axios'

interface User{
  id: number;
  name: string;
}

function App () {
  const [users,setUsers] = useState<User[]>([]);
  const [error , setError] = useState ('');

  useEffect(() => {
    const fetchUsers = async () => {
      try{
        const res = await axios
      .get<User[]>('https://jsonplaceholder.typicode.com/x/users')
      setUsers(res.data);
      }
      catch(err){
        setError((err as AxiosError).message);
      }
    }
    fetchUsers();
    //get -> await promise -> res/ err
    // .then(response => setUsers(response.data))
    // .catch(err => setError(err.message));
  },[])
  return (
    <> 
    {error && <p className='text-danger'>{error}</p>}
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
    </>
  )
}

export default App
