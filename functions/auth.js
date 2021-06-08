exports.handler = async function(event, context) {
    
    const users = ["xyz", "abc"];
    const user = event.queryStringParameters.user;

    if (users.includes(user)) {
        return {
            statusCode: 200,
            body: JSON.stringify({message: "Yo"})
        };
    } else {
        return {
            statusCode: 401,
            body: JSON.stringify({message: "Doh"})
        };
    }
  }