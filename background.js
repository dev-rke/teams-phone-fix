const targetPage = 'https://teams.microsoft.com/*';

//const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134';
const userAgent = 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Safari/537.36'
function rewriteUserAgentHeader(e) {
  for (const header of e.requestHeaders) {
    if (header.name.toLowerCase() === 'user-agent') {
      header.value = userAgent;
    }
  }
  return { requestHeaders: e.requestHeaders };
}

browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  { urls: [targetPage] },
  ['blocking', 'requestHeaders']
);
