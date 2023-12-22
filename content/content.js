// content.js

// Function to create the button
function createAlphaXIVButton() {
  const arXivId = window.location.pathname.split("/").pop();

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
