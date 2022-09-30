import { toggleLightModeIfNeeded, toggleLightMode } from './dark-mode.js';

toggleLightModeIfNeeded()

const buttonYT = document.getElementById("YT-btn");
buttonYT.addEventListener("click", function () {
    window.open("https://www.youtube.com/", "_self")
});

const times = document.getElementById("times");
chrome.storage.local.get("timesPopped", function (data) { times.textContent = data.timesPopped });

const toggleLightButton = document.getElementById("change-mode-btn");
toggleLightButton.addEventListener("click", toggleLightMode);


chrome.storage.local.get('categoryBlocked', function (data) {
    const message = document.getElementById('motivational-message');
    const motivationalSentences = [`You said it was better not to watch "${data.categoryBlocked}"`,
    `"${data.categoryBlocked}" is a category you do not want to watch`, `"${data.categoryBlocked}" videos are not the videos you need`
    ]
    message.textContent = motivationalSentences[Math.floor(Math.random() * motivationalSentences.length)];
});