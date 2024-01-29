document.addEventListener("DOMContentLoaded", function () {
  const secretKeyInput = document.getElementById(
    "secret-key"
  ) as HTMLInputElement | null;
  const passwordLengthInput = document.getElementById(
    "password-length"
  ) as HTMLInputElement | null;
  const saveSettingsButton = document.getElementById(
    "save-settings"
  ) as HTMLButtonElement | null;

  // Load and display the saved values
  chrome.storage.sync.get(["secretKey", "passwordLength"], function (result) {
    const savedSecretKey = result.secretKey || "";
    const savedPasswordLength = result.passwordLength || 12;
    if (!savedSecretKey) {
      return;
    } else if (!savedPasswordLength) {
      return;
    } else if (!savedSecretKey || !savedPasswordLength) {
      return;
    }

    if (!secretKeyInput || !passwordLengthInput || !saveSettingsButton) {
      console.log("Could not find all required elements");
      return;
    }

    secretKeyInput.value = savedSecretKey;
    passwordLengthInput.value = savedPasswordLength;
  });

  if (!secretKeyInput || !passwordLengthInput || !saveSettingsButton) {
    console.log("Could not find all required elements");
    return;
  }
  saveSettingsButton.addEventListener("click", function () {
    const secretKey = secretKeyInput.value;
    const passwordLength = parseInt(passwordLengthInput.value, 10);

    chrome.storage.sync.set({
      secretKey: secretKey,
      passwordLength: passwordLength,
    });

    alert("Settings saved successfully!");
  });
});

export {};
