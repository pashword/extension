import generatePashword from "@pashword/pashword-lib";

console.log("content script loaded");

chrome.runtime.onMessage.addListener(function (request) {
  if (request.message === "generatePassword") {
    chrome.storage.sync.get(
      ["secretKey", "passwordLength"],
      async function (result) {
        const { secretKey, passwordLength } = result;

        const domain = window.location.hostname;
        console.log("🚀 => domain:", domain);

        const passwordField = document.activeElement as HTMLInputElement | null;
        console.log("🚀 => passwordField:", passwordField);
        console.log("🚀 => passwordField.tagName:", passwordField?.tagName);

        if (
          passwordField &&
          passwordField.tagName === "INPUT" &&
          passwordField.type === "password"
        ) {
          const usernameField = findUsernameField(
            passwordField
          ) as HTMLInputElement | null;
          const username = usernameField ? usernameField.value : "";

          const generatedPassword = await generatePassword(
            domain,
            username,
            secretKey,
            passwordLength
          );
          passwordField.value = generatedPassword;
        }
      }
    );
  }
});

function findUsernameField(
  passwordField: HTMLInputElement
): HTMLInputElement | null {
  let currentElement: Element | null = passwordField;

  while (currentElement) {
    const inputField = findPreviousTextInput(currentElement);
    if (inputField) {
      return inputField;
    }

    currentElement = currentElement.parentElement;
  }

  return null; // Return null if no previous input field of type="text" is found
}

function findPreviousTextInput(element: Element): HTMLInputElement | null {
  let currentElement: Element | null = element.previousElementSibling;

  while (currentElement) {
    const inputFields = currentElement.querySelectorAll('input[type="text"]');
    if (inputFields.length > 0) {
      return inputFields[inputFields.length - 1] as HTMLInputElement;
    }

    currentElement = currentElement.previousElementSibling;
  }

  return null; // Return null if no previous input field of type="text" is found
}

function generatePassword(
  domain: string,
  username: string,
  secretKey: string,
  passwordLength: number
) {
  // Use pashword-lib's generatePassword function
  const toHash = JSON.stringify({
    website: domain,
    username,
    password: secretKey,
  });
  console.log("🚀 => toHash:", toHash);
  return generatePashword(toHash, passwordLength, domain, username);
}
