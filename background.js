chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (tab.url.includes("https://www.youtube.com/watch?v=") && changeInfo.url) {
        firstTab = tabId;
        chrome.tabs.reload(tabId);
    }
});

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse, tabId) {
    chrome.storage.local.get({ 'timesPopped': 0 }, function (data) {
        chrome.storage.local.set({ timesPopped: data.timesPopped + 1 });
    });
    chrome.tabs.update(firstTab, { 'url': chrome.runtime.getURL('music-blocked-mess.html') });
});     