if (browser.webRequest) {
  browser.webRequest.onBeforeRequest.addListener(
    redirectArxivToAlphaXiv,
    { urls: ["*://arxiv.org/*"] },
    ["blocking"]
  );

  function redirectArxivToAlphaXiv(details) {
    const arxivUrl = details.url;
    const alphaXivUrl = convertArxivToAlphaXiv(arxivUrl);

    return { redirectUrl: alphaXivUrl };
  }

  function convertArxivToAlphaXiv(arxivUrl) {
    // Implement your logic to convert ArXiv URL to AlphaXiv URL
    // Example: replace 'arxiv.org' with 'alphaxiv.org'
    return arxivUrl.replace('arxiv.org', 'alphaxiv.org');
  }
} else {
  console.error("browser.webRequest is not supported in this Firefox version.");
}
