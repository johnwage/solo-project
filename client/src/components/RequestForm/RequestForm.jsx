import React from 'react';
import './RequestForm.css';

const RequestForm = () => {
  return (
    <form>
      <select>
        <option value='GET'>GET</option>
        <option value='POST'>POST</option>
        <option value='PUT'>PUT</option>
        <option value='PATCH'>PATCH</option>
        <option value='DELETE'>DELETE</option>
      </select>

      <input
        className='Input'
        type='text'
        name='urlInput'
        placeholder='https://API.com'
        required
      />

      <button className='SendButton' name='SendButton' type='submit'>
        Send
      </button>
    </form>
  );
};

export default RequestForm;
