// ./src/static/js/Client.js
const API_VERSION = "1.0";
const parseJSON = (response) => response.json();
const serve = (api, query, cb) => fetch(
    `/${api}/api/v${API_VERSION}/${query}`,
    {"accept": "application/json"}
).
    then(parseJSON).
    then(cb);
const Client = {serve};

export default Client;
