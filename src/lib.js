export const APIURL = "https://jsonplaceholder.typicode.com/users";

export function callApi(reqMethod, url, data, responseHandler) {
  let options = {
    method: reqMethod
  };

  // Only add body for non-GET requests
  if (reqMethod !== "GET" && reqMethod !== "DELETE") {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(data);
  }

  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status + " - " + response.statusText);
      }
      return response.json();
    })
    .then((res) => {
      if (typeof responseHandler === "function") {
        responseHandler(res);
      }
    })
    .catch((err) => {
      console.error(err);
      alert("API Error");
    });
}
