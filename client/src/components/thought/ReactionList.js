import React from 'react';


const ReactionList = ({ reactions }) => {
  return (
    <div className='container mt-3 p-2'>
    <div className="card mb-3">
      <div className="card-header">
        <span className="text-comments">Comments</span>
      </div>
      <div className="card-body">
        {reactions &&
          reactions.map(reaction => (
            <p className="pill mb-3" key={reaction._id}>
             <p  style={{ fontWeight: 700 }}>
                {reaction.username} on {reaction.createdAt} </p> {" "} "{reaction.reactionBody}"
              
            </p>
          ))}
      </div>
    </div>
    </div>
  );
};

export default ReactionList;
