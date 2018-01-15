'use strict';

 exports.get = function(event, context) {
   console.log(event);
   context.succeed({
     statusCode: 200,
     body: 'hi there',
     headers: {'Content-Type': 'text/html'}
   });
 };
