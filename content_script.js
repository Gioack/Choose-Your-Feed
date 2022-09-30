let category = get_category();
chrome.storage.local.get({ "categoriesAllowed": [] }, function (data) {
    if (!(data.categoriesAllowed.includes(category))) {
        chrome.runtime.sendMessage({ text: category });
    }
})


function get_category() {
    let categoryIndex = document.documentElement.outerHTML.indexOf('"category":"') + 12;
    let letter = document.documentElement.outerHTML[categoryIndex];
    let category = "";
    while (letter != '"') {
        category += letter;
        categoryIndex++;
        letter = document.documentElement.outerHTML[categoryIndex];
    }
    return category;
}

