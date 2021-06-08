exports.handler = async function(event, context) {

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
      };

    const users = ["xyz", "abc"];
    const user = event.queryStringParameters.user;

    if (users.includes(user)) {
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({message: "Yo"})
        };
    } else {
        return {
            statusCode: 401,
            headers,
            body: JSON.stringify({message: "Doh"})
        };
    }
  }