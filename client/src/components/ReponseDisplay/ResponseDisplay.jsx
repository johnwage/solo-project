import React from 'react';

const ResponseDisplay = () => {
  return (
    <div>
      <h1>Welcome Back, John</h1>
      <h2>Send a request to an API endpoint to see the response</h2>

      <div>
        <div>
          <div>
            <h3>Status Code</h3>
            <h4>200</h4>
          </div>
          <img />
        </div>

        <div>
          <div>
            <h3>Time</h3>
            <h4>ms</h4>
          </div>
          <img />
        </div>
      </div>

      <div>
        <h3>Response Body</h3>
      </div>

      <div>
        <div>
          <div>
            <h3>Headers</h3>
            <div>
              <h3>4</h3>
            </div>
          </div>

          <div>
            <img />
            <div>
              <h4>cache-control</h4>
              <h5>max-age=43200</h5>
            </div>

            <div>
              <h4>content-type</h4>
              <h5>application/json; charset=utf-8</h5>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ResponseDisplay;
