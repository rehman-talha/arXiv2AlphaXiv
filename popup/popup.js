document.getElementById("connectButton").addEventListener("click", function() {
  // Get the current tab
  browser.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    // Send a message to the content script to open AlphaXIV
    browser.tabs.sendMessage(tabs[0].id, { action: "openAlphaXIV" });
  });
});
