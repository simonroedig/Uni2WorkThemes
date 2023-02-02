// Pride Theme
document.getElementById("prideTheme").addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type:"sendPrideTheme"}, function(response){
            if (response === "prideSet") {
                localStorage.setItem("clickedOnWhichRadioButton", "prideTheme");
            }
        })
    });
});

// Pride And Black Theme
document.getElementById("prideAndBlackTheme").addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type:"sendPrideAndBlackTheme"}, function(response){
            if (response === "prideAndBlackSet") {
                localStorage.setItem("clickedOnWhichRadioButton", "prideAndBlackTheme");
            }
        })
    });
});

// Black Theme
document.getElementById("blackTheme").addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type:"sendBlackTheme"}, function(response) {
            if (response === "blackSet") {
                localStorage.setItem("clickedOnWhichRadioButton", "blackTheme");
            }
        })
    });
});

// Default Theme
document.getElementById("defaultTheme").addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type:"sendDefaultTheme"}, function(response) {
            if (response === "defaultSet") {
                localStorage.setItem("clickedOnWhichRadioButton", "defaultTheme");
            }
        })
    });
});

// turquoiseYellowTheme
document.getElementById("turquoiseYellowTheme").addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type:"sendTurquoiseYellowTheme"}, function(response) {
            if (response === "turquoiseYellowThemeSet") {
                localStorage.setItem("clickedOnWhichRadioButton", "turquoiseYellowTheme");
            }
        })
    });
});

// bluePurpleTheme
document.getElementById("bluePurpleTheme").addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type:"sendBluePurpleTheme"}, function(response) {
            if (response === "bluePurpleThemeSet") {
                localStorage.setItem("clickedOnWhichRadioButton", "bluePurpleTheme");
            }
        })
    });
});


if (localStorage.getItem("clickedOnWhichRadioButton") === "blackTheme") {
    document.getElementById("blackTheme").checked = true;
} else if (localStorage.getItem("clickedOnWhichRadioButton") === "prideTheme") {
    document.getElementById("prideTheme").checked = true;
} else if (localStorage.getItem("clickedOnWhichRadioButton") === "defaultTheme") {
    document.getElementById("defaultTheme").checked = true;
} else if (localStorage.getItem("clickedOnWhichRadioButton") === "prideAndBlackTheme") {
    document.getElementById("prideAndBlackTheme").checked = true;
} else if (localStorage.getItem("clickedOnWhichRadioButton") === "turquoiseYellowTheme") {
    document.getElementById("turquoiseYellowTheme").checked = true;
} else if (localStorage.getItem("clickedOnWhichRadioButton") === "bluePurpleTheme") {
    document.getElementById("bluePurpleTheme").checked = true;
}


// Get current url from content.js
document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type:"popUpClicked"}, function(response) {
            console.log(response);
            // Only if respons possible let pop be native html, else replace
            if (response) {
            } else {
                document.getElementById("popUpDiv").innerHTML = "";
                
                const hTag = document.createElement("h2");
                hTag.appendChild(document.createTextNode("Go to Uni2Work"));
                document.getElementById("popUpDiv").appendChild(hTag);
                
            }
        })
    });
});


