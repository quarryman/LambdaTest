'use strict';

 exports.get = function(event, context) {
   console.log(event, 'logggggg');
   context.succeed({
     statusCode: 200,
     body: JSON.stringify({response: 'success'}),
     headers: {'Content-Type': 'application/json'}
   });
 };
