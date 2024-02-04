// background.js

// Listener registration for onBeforeRequest event
browser.webRequest.onBeforeRequest.addListener(
  details => {
    // Redirect the URL using the convertArxivToAlphaXiv function
    const redirectUrl = convertArxivToAlphaXiv(details.url);

    // Return an object with the redirectUrl property
    return { redirectUrl };
  },
  { urls: ["*://arxiv.org/*"] },
  ["blocking"]
);

// Function to convert ArXiv URL to AlphaXiv URL
function convertArxivToAlphaXiv(arxivUrl) {
  // Implement your logic to convert ArXiv URL to AlphaXiv URL
  // Example: replace 'arxiv.org' with 'alphaxiv.org'
  return arxivUrl.replace('arxiv.org', 'alphaxiv.org');
}
