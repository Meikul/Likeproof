// When the extension is installed or upgraded ...
browser.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  browser.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    browser.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains 'youtube.com'...
        conditions: [
          new browser.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'youtube.com/watch' },
          })
        ],
        // And shows the extension's page action.
        actions: [ new browser.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

browser.pageAction.onClicked.addListener(function(tab) {
  browser.tabs.executeScript(null, {file: "content.js"});
});
