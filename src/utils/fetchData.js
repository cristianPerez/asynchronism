let { XMLHttpRequest } = require("xmlhttprequest");

/**
 * Function fo fetch any data with method GET.
 * @param {*} url
 * @param {*} callback
 */
const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    // New instance
    const xhttp = new XMLHttpRequest();
    // Thrird value active the async
    xhttp.open("GET", url, true);
    // Validate the state
    xhttp.onreadystatechange = ((event) => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("Error", url));
      }
    });
    xhttp.send();
  });
};

module.exports = fetchData;
