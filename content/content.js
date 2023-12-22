browser.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "openAlphaXIV") {
    // Extract ArXiv ID from the URL
    const arXivId = window.location.pathname.split("/").pop();
    
    // Open AlphaXIV with the corresponding URL
    window.open(`https://alphaxiv.org/abs/${arXivId}`, "_blank");
  }
});
