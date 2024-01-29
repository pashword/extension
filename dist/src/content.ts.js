import pashword_pashword_lib_default from '../vendor/deps/pashword_pashword-lib.js';

const generatePashword = pashword_pashword_lib_default.__esModule ? pashword_pashword_lib_default.default : pashword_pashword_lib_default;
console.log("content script loaded");
chrome.runtime.onMessage.addListener(function(request) {
  if (request.message === "generatePassword") {
    chrome.storage.sync.get(
      ["secretKey", "passwordLength"],
      async function(result) {
        const { secretKey, passwordLength } = result;
        const domain = window.location.hostname;
        console.log("\u{1F680} => domain:", domain);
        const passwordField = document.activeElement;
        console.log("\u{1F680} => passwordField:", passwordField);
        console.log("\u{1F680} => passwordField.tagName:", passwordField?.tagName);
        if (passwordField && passwordField.tagName === "INPUT" && passwordField.type === "password") {
          const usernameField = findUsernameField(
            passwordField
          );
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
function findUsernameField(passwordField) {
  let currentElement = passwordField;
  while (currentElement) {
    const inputField = findPreviousTextInput(currentElement);
    if (inputField) {
      return inputField;
    }
    currentElement = currentElement.parentElement;
  }
  return null;
}
function findPreviousTextInput(element) {
  let currentElement = element.previousElementSibling;
  while (currentElement) {
    const inputFields = currentElement.querySelectorAll('input[type="text"]');
    if (inputFields.length > 0) {
      return inputFields[inputFields.length - 1];
    }
    currentElement = currentElement.previousElementSibling;
  }
  return null;
}
function generatePassword(domain, username, secretKey, passwordLength) {
  const toHash = JSON.stringify({
    website: domain,
    username,
    password: secretKey
  });
  console.log("\u{1F680} => toHash:", toHash);
  return generatePashword(toHash, passwordLength, domain, username);
}
