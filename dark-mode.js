export function toggleLightModeIfNeeded() {
    chrome.storage.local.get({ 'isDarkModeSet': true }, function (data) {
        if (data.isDarkModeSet == false) {
            toggleLightUserInterface();
            if (location.href.split("/").pop() == "popup.html") {
                document.getElementById("darkmode-checkbox").checked ^= 1;
            }
        }
    });
}

export function toggleLightMode() {
    toggleLightUserInterface();
    setToStorage();
}

function toggleLightUserInterface() {
    toggleColors();
    toggleAppLogo();
    try {
        const toggleLightButton = document.getElementById("change-mode-btn");
        toggleLightButton.classList.toggle("dark");
    }
    catch (e) {
    };

}

function setToStorage() {
    chrome.storage.local.get({ 'isDarkModeSet': true }, function (data) {
        chrome.storage.local.set({ isDarkModeSet: !data.isDarkModeSet });
    });
}

function toggleColors() {
    let root = document.querySelector(':root');
    root.classList.toggle("dark-mode");
}

function toggleAppLogo() {
    let appLogo = document.getElementById("logo");
    if (isDarkModeActive()) {
        appLogo.src = "icons/App-logo-white.png";
    }
    else {
        appLogo.src = "icons/App-logo-yellow.png";
    }
};

function isDarkModeActive() {
    return window.getComputedStyle(document.body, null).getPropertyValue('background-color') == "rgb(255, 255, 255)"

}