// content.js

// Function to inject Font Awesome stylesheet
function injectFontAwesomeStylesheet() {
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
  style.integrity = "sha512-rG6Rj0A4NecuRvnLPYBz8CC3vQW3IeKc8O+q1S62I4OH7vE+frTFu/6KrGnIpGgAr9Nxdx4E1W6+sw4i1Oj7Fg==";
  style.crossOrigin = "anonymous";
  style.referrerPolicy = "no-referrer";

  // Append the stylesheet to the head of the document
  document.head.appendChild(style);
}

// Function to create the button
function createAlphaXIVButton() {
  const arXivId = window.location.pathname.split("/").pop();

  // Inject Font Awesome stylesheet
  injectFontAwesomeStylesheet();

  // Create the button element
  const button = document.createElement("button");
  button.innerHTML = '<span style="margin-right: 5px;"><i class="fas fa-comment-alt"></i></span> Open in AlphaXIV';

  // Style the button
  button.style.position = "fixed";
  button.style.top = "20px";
  button.style.right = "20px";
  button.style.backgroundColor = "#007BFF";  // Blue color
  button.style.color = "#FFFFFF";  // White text color
  button.style.border = "none";
  button.style.padding = "10px";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";

  // Add click event listener to open AlphaXIV
  button.addEventListener("click", function() {
    window.open(`https://alphaxiv.org/abs/${arXivId}`, "_blank");
  });

  // Append the button to the body
  document.body.appendChild(button);
}

// Call the function to create the button
createAlphaXIVButton();
