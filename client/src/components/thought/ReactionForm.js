import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_REACTION } from '../../utils/mutations';
import SendIcon from '@mui/icons-material/Send';

const ReactionForm = ({ thoughtId }) => {
  const [reactionBody, setBody] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addReaction, { error }] = useMutation(ADD_REACTION);

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 1000) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addReaction({
        variables: { reactionBody, thoughtId },
      });

      // clear form value
      setBody('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='container-reaction'>
      <p
        className={`m-0 ${characterCount === 1000 || error ? 'text-error' : ''}`}
      >
       
        {error && <span className="ml-2">You are only allowed a 1000 characters</span>}
      </p>
      <form
        className="reaction-form"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Reply to the comments..."
          value={reactionBody}
          className="reaction-input"
          onChange={handleChange}
        ></textarea>

        <button className="btn" type="submit" id='btn'>
          <SendIcon />
        </button>
      </form>

      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default ReactionForm;
