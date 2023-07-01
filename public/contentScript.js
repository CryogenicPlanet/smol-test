// public/contentScript.js

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "GET_GITHUB_DATA") {
    fetchGithubData().then(data => {
      sendResponse({ data: data });
    });
    return true; // indicates we will send a response asynchronously
  } else if (request.message === "REDESIGN_PAGE") {
    redesignPage(request.data);
  }
});

async function fetchGithubData() {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        query {
          viewer {
            login
            avatarUrl
            repositories(first: 10) {
              nodes {
                name
                description
                url
              }
            }
          }
        }
      `
    })
  });

  const data = await response.json();
  return data.data.viewer;
}

function redesignPage(data) {
  // remove unnecessary elements
  const elementsToRemove = document.querySelectorAll('.js-pinned-items-reorder-container, .js-pinned-items-reorder-list');
  elementsToRemove.forEach(el => el.remove());

  // add new elements with fetched data
  const container = document.querySelector('.js-pinned-items-reorder-container');
  data.repositories.nodes.forEach(repo => {
    const repoElement = document.createElement('div');
    repoElement.innerHTML = `
      <h3><a href="${repo.url}">${repo.name}</a></h3>
      <p>${repo.description}</p>
    `;
    container.appendChild(repoElement);
  });
}