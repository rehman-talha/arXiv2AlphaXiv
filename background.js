// background.js

chrome.browserAction.onClicked.addListener(function (tab) {
  // Check if the clicked tab has a valid ArXiv URL
  const arxivPattern = /^https:\/\/arxiv.org\/(.+)/;
  const match = tab.url.match(arxivPattern);

  if (match) {
    // Extract the identifier from the ArXiv URL
    const arxivIdentifier = match[1];

    // Build the corresponding AlphaXiv URL
    const alphaXivURL = `https://alphaxiv.org/${arxivIdentifier}`;

    // Open a new tab with the AlphaXiv URL
    chrome.tabs.create({ url: alphaXivURL });
  }
});
