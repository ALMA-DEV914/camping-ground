import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CampgroundList() {
  const [user, setUser] = useState([]);

   const fetchData = () => {
      return axios.get("https://jsonplaceholder.typicode.com/users")
      .then ((response) => setUser(response.data))
   }

   useEffect(() => {
    fetchData()
   }, []);

  return (
    <div>
       <main>
      <h1>User List</h1>
      <ul>
        {user && user.length > 0 && user.map((userObj, index) => (
            <li key={userObj.id}>{userObj.name}</li>
          ))}
      </ul>
    </main>
    </div>
  )
}

export default CampgroundList
