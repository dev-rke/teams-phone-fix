const targetPages = ['https://teams.microsoft.com/*', 'https://gov.teams.microsoft.us/*'];
const fallbackUserAgent = 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.74 Safari/537.36 Edg/79.0.309.43';
let userAgent = fallbackUserAgent;

/**
 * rewrite user agent header
 *
 * @param e
 * @returns {{requestHeaders: *}}
 */
function rewriteUserAgentHeader(e) {
  for (const header of e.requestHeaders) {
    if (header.name.toLowerCase() === 'user-agent') {
      header.value = userAgent;
    }
  }
  return { requestHeaders: e.requestHeaders };
}

/**
 * register webrequest hook
 *
 */
browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  { urls: targetPages },
  ['blocking', 'requestHeaders']
);

/**
 * handle first install / updates
 */
function onInstalled(details) {
  if (details.reason === 'update' || details.reason === 'install') {
    // handle tab reload after installation to ensure the extension will work correctly
    browser.tabs.query({ url: ['https://teams.microsoft.com/*',
                               'https://gov.teams.microsoft.us/*']
    }).then((tabs) => {
      tabs.forEach((tab) => {
        if (tab.id) {
          browser.tabs.reload(tab.id, { bypassCache: true });
        }
      })
    });
  }
}

// register install/update handler
browser.runtime.onInstalled.addListener(onInstalled);

/**
 * watch storage for changes
 *
 * @param changes
 * @param area
 */
function storageWatcher(changes, area) {
  if (area === 'local') {
    if (changes.userAgent) {
      userAgent = changes.userAgent.newValue;
    }
  }
}

// register storage watcher
browser.storage.onChanged.addListener(storageWatcher);

// initialize user agent from storage
browser.storage.local.get({userAgent}).then((item) => userAgent = item.userAgent);
