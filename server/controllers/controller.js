const db = require('../models/model.js');

const controller = {};

controller.saveRequest = (req, res, next) => {
  const { method, url, json_body } = req.body;
  const queryString =
    'INSERT INTO api_endpoint_tests (method, url, json_body) ' +
    'VALUES ($1, $2, $3) ' +
    'RETURNING *';
  const inputs = [method, url, json_body];
  db.query(queryString, inputs)
    .then((result) => {
      console.log('New saved request:', result);
      return next();
    })
    .catch((error) => {
      return next({
        log: `Error in controller.saveRequest: ${error}.`,
        status: 500,
        message: { err: 'An error occurred' },
      });
    });
};

module.exports = controller;
