import React from "react";


const UserDetail = ({users}) => {
    

  return (
    <div className="container mt-4">
      {users && users.map((user) => (
        <li key={user._id}>{user.username}</li>
      ))}
    </div>
  );
};

export default UserDetail;
