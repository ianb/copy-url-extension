# Copy Link

This has a couple super-small extensions, one to copy HTML links of a page, and another to copy Markdown links.

That is, they copy:

* `<a href="URL">TITLE</a>` (good for pasting into an email or document)
* `[TITLE](URL)` (good for pasting into a Markdown document)

## Installing

These add-ons are both published on addons.mozilla.org:

* [Copy Markdown link](https://addons.mozilla.org/en-US/firefox/addon/copy-markdown-link/)
* [Copy HTML link](https://addons.mozilla.org/en-US/firefox/addon/copy-html-link/)

## Developing

To install and test out:

```sh
git clone https://github.com/ianb/copy-url-extension.git
cd copy-url-extension
npm install
npm run start:md   # Test Markdown version
npm run start:html # Text HTML version
```

### Contact & Contribution

IRC is the best way to communicate, via `#testpilot` on irc.mozilla.org (you can use [this link](https://kiwiirc.com/nextclient/irc.mozilla.org/testpilot) for chat access via the web if you do not otherwise use IRC). You might want to ping `ianbicking`

### Contributors

The [icon](https://thenounproject.com/search/?q=link&i=1480779) is by [Kidiladon](https://thenounproject.com/kidilandon)
