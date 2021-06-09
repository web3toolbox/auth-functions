exports.handler = async function(event, context) {

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
      };

    const users = [
        "xyz", 
        "abc", 
        "0x5c73ffc4e2bd5493db53d933c6b80f0e7c00772d83d590e8eabdedaed1c889224155b19e037175cdf0596c86a6f78e2575482dca15ea7921eaa7d81e8ade3a2a1c",
        "0x32bd68dea6cf3627ad7b50dda50c924b588d12245fa256a5fbf3fcb1f4b91f061a7331be1d1039ddc253ba3693c4e6647850208fe4865f9e3234309f9b04740f1c"
    ];
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