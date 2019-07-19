const request = require("request");


const client_id = "44JkofroiLC8tF63e4NQwLeZzYoexhQD";
const client_secret =
  "8gsDUfZ1IzP-nBVpUjRC3LU7IpAhUuHJpMw4F-dvUDly-CO_wZ9c402rOsSX-fJw";
const audience = "https://klequis-todo.tk";

const getToken = () => {
  return new Promise((resolve, reject) => {
    const options = {
      method: "POST",
      url: "https://klequis-todo.auth0.com/oauth/token",
      headers: { "content-type": "application/json" },
      body: `{"client_id":"${client_id}","client_secret":"${client_secret}","audience":"${audience}","grant_type":"client_credentials"}`
    };

    request(options, function(error, response, body) {
      if (error) reject(new Error(error));
      resolve(JSON.parse(body))
    });
  });
};

const getTodos = (token) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: "GET",
      url: "https://api.klequis-todo.tk/api/todo",
      headers: {
        authorization: `Bearer ${token}`
      }
    };
    request(options, function(error, response, body) {
      if (error) reject(new Error(error))
      resolve(body)
    });
  });
};

function testGetTodos() {
  getToken().then(token => {
    const accessToken = token.access_token;
    getTodos(accessToken).then(result => console.log(result));
  })
  
}

testGetTodos()