import { toggleLightModeIfNeeded, toggleLightMode } from './dark-mode.js';

toggleLightModeIfNeeded()

const darkModeBtn = document.getElementById("darkmode-checkbox");
darkModeBtn.addEventListener("click", () => {
    toggleLightMode();
    // document.getElementById("darkmode-checkbox").checked ^= 1;
});

let categories = document.getElementsByName('check');
categories.forEach(checkbox => {
    chrome.storage.local.get({ "categoriesAllowed": [] }, function (data) {
        if (data.categoriesAllowed.includes(checkbox.id)) {
            checkbox.checked = true
        }
    })
})


categories.forEach(el => el.addEventListener('click', dealWithStorage));
function dealWithStorage() {
    let id = this.id;
    chrome.storage.local.get({ "categoriesAllowed": [] }, function (data) {
        let categoriesAllowed = data.categoriesAllowed;
        console.log(categoriesAllowed);
        if (categoriesAllowed.includes(id)) {
            categoriesAllowed = removeItemOnce(categoriesAllowed, id)
        }
        else {
            categoriesAllowed.push(id)
        }
        chrome.storage.local.set({ "categoriesAllowed": categoriesAllowed });
    })
}

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    arr.splice(index, 1);
    return arr;
}