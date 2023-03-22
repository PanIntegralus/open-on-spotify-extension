const validUrls = ['open.spotify.com', 'play.spotify.com', 'spotify.link']

function checkForValidUrl(tabId, changeInfo, tab) {
  if (validUrls.some(url => tab.url.indexOf(url) > -1)) {
    browser.pageAction.show(tabId);
  }
}


browser.tabs.onUpdated.addListener(checkForValidUrl);

browser.pageAction.onClicked.addListener((tab) => {
  browser.tabs.update(tab.id, {url: `spotify:${tab.url}`});
});