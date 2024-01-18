import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateStatusCode,
  updateTime,
  updateBody,
} from '../../redux/responseSlice.js';
import './RequestForm.css';

const RequestForm = () => {
  const [method, setMethod] = useState('GET');
  const [inputURL, setInputURL] = useState('');

  const dispatch = useDispatch();

  // const handleSubmit = (e) => {
  //   // make fetch request
  //   // parse json of Response object
  //   // catch error (maybe not?)
  //   // then use response and store in variables
  //   // update redux store (so response can be used in ResponseDisplay)
  //   e.preventDefault();
  //   fetch(inputURL, {
  //     method: method,
  //   })
  //     .then((responseObj) => {
  //       dispatch(updateStatusCode(responseObj.status));
  //       return responseObj;
  //     })
  //     .then((responseObj) => responseObj.json())
  //     .then((body) => dispatch(updateBody(body)));
  // };

  const handleSubmit = async (e) => {
    // make fetch request
    // parse json of Response object
    // catch error (maybe not?)
    // then use response and store in variables
    // update redux store (so response can be used in ResponseDisplay)
    e.preventDefault();

    const startTime = new Date().getTime();

    const response = await fetch(inputURL, {
      method: method,
    });

    const endTime = new Date().getTime() - startTime;

    const body = await response.json();

    dispatch(updateStatusCode(response.status));
    dispatch(updateTime(endTime));
    dispatch(updateBody(body));
  };

  return (
    <form onSubmit={handleSubmit}>
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
