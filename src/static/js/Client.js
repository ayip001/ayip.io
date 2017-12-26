// ./src/static/js/Client.js
function serve(api, version='1.0', q, cb) {
  // console.log(`url: /${api}/api/v${version}/${q}`);
  return fetch(`/${api}/api/v${version}/${q}`, {
    accept: "application/json"
  })
    // .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

/*
function checkStatus(response) {
  // console.log('response:\n' + response);
  if (response.status >= 200 && response.status < 300)
    return response;
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}
*/

function parseJSON(response) {
  return response.json();
}

const Client = { serve };
export default Client;
