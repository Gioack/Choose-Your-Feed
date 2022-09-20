import { toggleLightModeIfNeeded, toggleLightMode } from './dark-mode.js';

toggleLightModeIfNeeded()

const motivationalSentences = ["Don't give up, you're stronger than music!",
    "Don't let music ruin your productivity", "Keep it up! You don't want this distraction"
]
const message = document.getElementById('motivational-message');
message.textContent = motivationalSentences[Math.floor(Math.random() * motivationalSentences.length)];

const buttonYT = document.getElementById("YT-btn");
buttonYT.addEventListener("click", function () {
    window.open("https://www.youtube.com/", "_self")
});

const times = document.getElementById("times");
chrome.storage.local.get("timesPopped", function (data) { times.textContent = data.timesPopped });

const toggleLightButton = document.getElementById("change-mode-btn");
toggleLightButton.addEventListener("click", toggleLightMode);
