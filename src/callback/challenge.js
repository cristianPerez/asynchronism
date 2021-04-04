// Package created from Microsoft.
let { XMLHttpRequest } = require("xmlhttprequest");

const API = "https://rickandmortyapi.com/api/character/";

/**
 * Function fo fetch any data with method GET.
 * @param {*} url
 * @param {*} callback
 */
function fetchData(url, callback) {
  // New instance
  let xhttp = new XMLHttpRequest();
  // Thrird value active the async
  xhttp.open("GET", url, true);
  // Validate the state
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error " + url_api);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

fetchData(API, function (err1, data1) {
  if (err1) return console.error(err1);
  fetchData(API + data1.results[0].id, function (err2, data2) {
    if (err2) return console.error(err2);
    fetchData(data2.origin.url, function (err3, data3) {
      if (err3) return console.error(err3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
