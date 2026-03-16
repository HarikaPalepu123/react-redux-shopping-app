import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    console.log("Component Loaded");

   
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
       
        console.log("API Response:", data);

        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.log("Error:", error);
        setLoading(false);
      });

  }, []);

  return (
    <div>
      <h2>Users List</h2>

      
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map(user => (
          <p key={user.id}>{user.name}{user.email}</p>  
        ))
      )}
    </div>
  );
}

export default Users;