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

  // get today's date and time
  const today = new Date();

  // format date
  const dateFormat = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const formattedDate = dateFormat.format(today);

  // format day and time
  const dayTimeFormat = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZoneName: 'short',
  });
  const formattedDayTime = dayTimeFormat.format(today);

  return (
    <div className='RequestForm'>
      <div className='dateAndTime'>
        <div className='date'>{formattedDate}</div>
        <div className='datedTime'>{formattedDayTime}</div>
      </div>

      <div className='profile'>
        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' />
        <h2>John Wage</h2>
        <h3>johnwage</h3>
        <div className='profileButtons'>
          <button>Bell</button>
          <button>Edit Profile</button>
        </div>
      </div>

      <div className='requestSection'>
        <h2>Request</h2>
        <form onSubmit={handleSubmit}>
          <div>
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
          </div>

          <button className='SendButton' name='SendButton' type='submit'>
            Send
          </button>
        </form>
      </div>

      <div className='jsonBody'>
        <h2>Body</h2>
        <button>JSON</button>
      </div>
    </div>
  );
};

export default RequestForm;
