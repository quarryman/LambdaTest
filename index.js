'use strict';

 exports.get = function(event, context) {
   console.log(event, 'logggggg');
   context.succeed({
     statusCode: 200,
     body: JSON.stringify({response: 'success'}),
     headers: {'Content-Type': 'application/json'}
   });
 };
exports.get2 = function(event, context) {
	console.log(event, 'logggggg2');
	context.succeed({
		statusCode: 200,
		body: JSON.stringify({response: 'success2'}),
		headers: {'Content-Type': 'application/json'}
	});
};
