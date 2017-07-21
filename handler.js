'use strict';

module.exports.getIP = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(event.requestContext.identity.sourceIp),
  };

  callback(null, response);
};
