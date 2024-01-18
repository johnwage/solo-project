import React from 'react';
import { useState } from 'react';
import './RequestForm.css';

const RequestForm = () => {
  const [method, setMethod] = useState('GET');
  const [inputURL, setInputURL] = useState('');

  const handleSubmit = (e) => {};

  return (
    <form>
      <select value={method} onChange={(e) => setMethod(e.target.value)}>
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
        value={inputURL}
        onChange={(e) => setInputURL(e.target.value)}
        required
      />

      <button className='SendButton' name='SendButton' type='submit'>
        Send
      </button>
    </form>
  );
};

export default RequestForm;
