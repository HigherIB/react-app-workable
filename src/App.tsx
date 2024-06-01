import axios from "axios"
import React, { useEffect, useRef, useState } from "react"

interface User {
  id: number;
  name: string;
}



function App(){
  const [users, setUsers] = useState<User[]>([])

  // After render
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
  }, [])

  

  return (
    <div>
      <ul className="list-group">
        {users.map(user => <li key={user.id} className="list-group-item">{user.name}</li> )}
      </ul>
    </div>
  ) 
}

export default App 