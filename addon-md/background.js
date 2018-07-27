browser.contextMenus.create({
  title: "Copy Markdown link",
  contexts: ["page", "tab"],
  onclick: (info, tab) => {
    copyText(`[${tab.title}](${tab.url})`);
  }
});

browser.pageAction.onClicked.addListener((tab) => {
  copyText(`[${tab.title}](${tab.url})`);
});

let input = document.createElement("input");
input.setAttribute("type", "text");
document.body.appendChild(input);

function copyText(text) {
  input.value = text;
  input.focus();
  input.select();
  document.execCommand("copy");
}
