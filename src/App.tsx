import axios, { CanceledError } from "axios"
import React, { useEffect, useRef, useState } from "react"

interface User {
  id: number;
  name: string;
}



function App(){
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)
  // After render
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    axios.get("https://jsonplaceholder.typicode.com/users", { signal: controller.signal })
      .then(res => {
        setUsers(res.data);
        setLoading(false)
      })
      .catch(err => {
        if(err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      })

    return () => controller.abort();
  }, [])

  const deleteUser = (user: User) => {
    const originalUsers = [...users];

    setUsers(users.filter((use) => use.id !== user.id));

    axios.delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  }
  
  const updateUser = (user: User) => {
    const originalUsers = [...users];

    const updatedUser = { ...user, name: user.name.toUpperCase() }
    setUsers(users.map(u => u.id === user.id ? updatedUser : u));

    axios.patch('https://jsonplaceholder.typicode.com/users/' + user.id, updatedUser)
      .catch( err => {
        setError(err.message);
        setUsers(originalUsers);
      })
  }


  return (
    <div>
      {isLoading && <div className="spinner-border"></div> }
      {error && <p className="text-danger">{error}</p> }
      <ul className="list-group">
        {users.map(user => <li key={user.id} className="list-group-item d-flex justify-content-between">{user.name}
         <div>
           <button className="btn btn-outline-secondary mx-1" onClick={() => updateUser(user)}>Update</button>
           <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button> 
         </div>
         </li> )}
      </ul>
    </div>
  ) 
}

export default App 