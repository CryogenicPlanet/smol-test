// public/background.js

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'github.com'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "GET_GITHUB_DATA") {
    fetchGithubData(request.data)
      .then(data => sendResponse({message: "REDESIGN_PAGE", data: data}))
      .catch(error => console.error(error));
  }
  return true; // keeps the message channel open until sendResponse is executed
});

function fetchGithubData(query) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://api.github.com/graphql');
    xhr.setRequestHeader('Authorization', 'bearer YOUR_GITHUB_PERSONAL_ACCESS_TOKEN');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(JSON.stringify({query: query}));
  });
}