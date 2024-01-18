import React from 'react';
import { useSelector } from 'react-redux';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';

const ResponseDisplay = () => {
  const body = useSelector((state) => state.response.body);
  const statusCode = useSelector((state) => state.response.statusCode);
  const time = useSelector((state) => state.response.time);

  return (
    <div>
      <h1>Welcome Back, John</h1>
      <h2>Send a request to an API endpoint to see the response</h2>

      <div>
        <div>
          <div>
            <h3>Status Code</h3>
            {statusCode !== 0 && <h4>{statusCode}</h4>}
          </div>
          <img />
        </div>

        <div>
          <div>
            <h3>Time</h3>
            {time !== 0 && <h4>{time} ms</h4>}
          </div>
          <img />
        </div>
      </div>

      <div>
        <h3>Response Body</h3>
        <div>
          {body && (
            <CodeMirror
              value={JSON.stringify(body, null, 2)}
              height='200px'
              extensions={[json()]}
              readOnly
            />
          )}
        </div>
      </div>

      {/* <div>
        <div>
          <div>
            <h3>Headers</h3>
            <div>
              <h3>4</h3>
            </div>
          </div>

          <div>
            <div>
              <h4>cache-control</h4>
              <h5>max-age=43200</h5>
            </div>

            <div>
              <h4>content-type</h4>
              <h5>application/json; charset=utf-8</h5>
            </div>

            <div>
              <h4>expires</h4>
              <h5>-1</h5>
            </div>

            <div>
              <h4>pragma</h4>
              <h5>no-cache</h5>
            </div>
          </div>
        </div>

        <div>
          <h3>Previous API Requests</h3>
          <div>
            <h3>3</h3>
          </div>

          <div>
            <h4>https://abc.com</h4>
            <h5>Status 200</h5>
          </div>

          <div>
            <h4>https://abc.com/api/2</h4>
            <h5>Status 404</h5>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ResponseDisplay;
