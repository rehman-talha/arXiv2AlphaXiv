const saveOptions = (e) => {
  e.preventDefault();

  const enableRedirectCheckbox = document.querySelector("input[name='enable-redirect']");
  const enableRedirectValue = enableRedirectCheckbox.checked;
  browser.storage.sync.set({ redirectEnabled: enableRedirectValue });

  const alphaXivBaseUrlInput = document.getElementById('alphaXivBaseUrl');
  const alphaXivBaseUrlValue = alphaXivBaseUrlInput.value.trim();
  browser.storage.sync.set({ redirectBaseUrl: alphaXivBaseUrlValue });
}

const restoreOptions = async () => {
  try {
    const { redirectEnabled, redirectBaseUrl } = await browser.storage.sync.get(['redirectEnabled', 'redirectBaseUrl']);
    if (redirectEnabled !== undefined) {
      document.querySelector("input[name='enable-redirect']").checked = redirectEnabled;
    }
    if (redirectBaseUrl) {
      document.getElementById('alphaXivBaseUrl').value = redirectBaseUrl;
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
