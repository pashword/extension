chrome.runtime.onStartup.addListener(() => {
  console.log(`onStartup()`);
});

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({
    secretKey: "",
    passwordLength: 20,
  });
});

chrome.contextMenus.create({
  id: "generatePassword",
  title: "Generate Password",
  contexts: ["editable"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "generatePassword") {
    if (tab && tab.id) {
      console.log("🚀 => tab:", tab);
      chrome.tabs.sendMessage(tab.id, { message: "generatePassword" });
    }
  }
});

export {};
