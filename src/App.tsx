import React, { useEffect, useRef, useState } from "react"
import { CanceledError } from "./services/api-client";
import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

function App(){
  const { users, error, isLoading, setUsers, setError } = useUsers();

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: 'Malik' };
    setUsers([newUser, ...users]);

    userService.create(newUser)
      .then(({ data: savedUSer }) => setUsers([savedUSer, ...users]))
      .catch((err) => {
        setError(err.message)
        setUsers(originalUsers);
      })
  }

  const deleteUser = (user: User) => {
    const originalUsers = [...users];

    setUsers(users.filter((use) => use.id !== user.id));

    userService.delete(user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  }
  
  const updateUser = (user: User) => {
    const originalUsers = [...users];

    const updatedUser = { ...user, name: user.name.toUpperCase() }
    setUsers(users.map(u => u.id === user.id ? updatedUser : u));

    userService.update(updatedUser)
    .catch( err => {
        setError(err.message);
        setUsers(originalUsers);
      })
  }


  return (
    <div>
      {isLoading && <div className="spinner-border mx-5 my-5"></div> }
      {error && <p className="text-danger">{error}</p> }
      <button type="button" className="btn btn-primary my-2" onClick={() => addUser}>Add New User</button>
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