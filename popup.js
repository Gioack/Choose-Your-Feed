import { toggleLightModeIfNeeded, toggleLightMode } from './dark-mode.js';

toggleLightModeIfNeeded()


const darkModeBtn = document.getElementById("darkmode-checkbox");
darkModeBtn.addEventListener("click", () => {
    toggleLightMode();
    // document.getElementById("darkmode-checkbox").checked ^= 1;
});