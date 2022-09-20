if (document.documentElement.outerHTML.includes('"category":"M')) {
    chrome.runtime.sendMessage({ text: "music found" });
}



