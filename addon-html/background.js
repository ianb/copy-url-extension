function htmlQuote(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}

browser.contextMenus.create({
  title: "Copy HTML link",
  contexts: ["page", "tab"],
  onclick: (info, tab) => {
    copyHtml(`<a href="${htmlQuote(tab.url)}">${htmlQuote(tab.title)}</a>`);
  }
});

browser.pageAction.onClicked.addListener((tab) => {
  copyHtml(`<a href="${htmlQuote(tab.url)}">${htmlQuote(tab.title)}</a>`);
});

let container = document.createElement("div");
document.body.appendChild(container);

function copyHtml(html) {
  container.innerHTML = html; // eslint-disable-line no-unsanitized/property
  window.getSelection().removeAllRanges();
  let range = document.createRange();
  range.selectNode(container);
  window.getSelection().addRange(range);
  document.execCommand("copy");
}
