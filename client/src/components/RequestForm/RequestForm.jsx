import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateStatusCode,
  updateTime,
  updateBody,
} from '../../redux/responseSlice.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
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

  const handleSave = async (e) => {
    e.preventDefault();

    const requestDetails = JSON.stringify({
      method: method,
      url: inputURL,
      json_body: '',
    });

    await fetch('http://localhost:3000/api/request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: requestDetails,
    });
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
        <h2>Codesmith</h2>
        <h3>hello@codesmith.io</h3>
        <div className='profileButtons'>
          <button>
            <FontAwesomeIcon
              icon={faBell}
              size='lg'
              style={{ color: '#ffffff' }}
            />
          </button>
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

          <div>
            <button className='SendButton' name='SendButton' type='submit'>
              Send
            </button>

            <button
              className='SaveButton'
              name='SaveButton'
              onClick={handleSave}
            >
              <FontAwesomeIcon
                icon={faFloppyDisk}
                size='lg'
                style={{ color: '#ffffff' }}
              />
            </button>
          </div>
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
