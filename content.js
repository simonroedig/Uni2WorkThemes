function uninotworkTXT() {
    var txtLogoClass = document.getElementsByClassName("asidenav__logo-uni2work");
    for (var i = 0; i < txtLogoClass.length; i++) {
        txtLogoClass[i].innerHTML = "UniNotWork";
        txtLogoClass[i].style.letterSpacing = "1px";
        txtLogoClass[i].style.justifyContent = "center";
    }
}

function uni2workTXT() {
    var txtLogoClass = document.getElementsByClassName("asidenav__logo-uni2work");
    for (var i = 0; i < txtLogoClass.length; i++) {
        txtLogoClass[i].innerHTML = "Uni2Work";
        txtLogoClass[i].style.letterSpacing = "1px";
        txtLogoClass[i].style.justifyContent = "center";
    }
}

function prideTXT() {
    var txtLogoClass = document.getElementsByClassName("asidenav__logo-uni2work");
    for (var i = 0; i < txtLogoClass.length; i++) {
        txtLogoClass[i].innerHTML = "PRIDE <3";
        txtLogoClass[i].style.letterSpacing = "3px";
        txtLogoClass[i].style.justifyContent = "center";
    }
}

////////////////////////////////////////////////////////

function blackTheme() {

    var head = document.head || document.getElementsByTagName("head")[0];

    var css = "* {     --color-primary: #000000;     --color-light: #000000;     --color-lighter: #000000;     --color-dark: #3b3b3b;     --color-darker: #000000; }  *::-webkit-scrollbar {     width: 12px;                }    *::-webkit-scrollbar-track {     background: rgb(64, 64, 64);            }    *::-webkit-scrollbar-thumb {     background: rgb(166, 166, 166);          }  *::-webkit-scrollbar-thumb:hover {     background: rgb(202, 202, 202);          }";
    
    if (document.getElementById("injectedCSS") == null) {
        var style = document.createElement("style");
        style.id = "injectedCSS";
        style.appendChild(document.createTextNode(css));
        head.appendChild(style);
    } else {
        document.getElementById("injectedCSS").innerHTML = css;
    }
    
    uninotworkTXT();
}

function prideTheme() {

    /*
    const c1 = "black";
    const c2 = "black";
    const c3 = "black";
    const c4 = "black";
    const c5 = "black";
    const op = 0.4;

    //var css1 = "* { --color-primary: " + c1 + "; --color-light: " + c2 + "; --color-lighter: " + c3 + "; --color-dark: " + c4 + "; --color-darker: " + c5 + "; }";
    //var css1 = "* { --color-primary: " + c1 + "; }";
    //var css1 = "";
    //var css2 = ".navbar {background-image: linear-gradient(180deg, rgba(254, 0, 0, " + op + ") 16.66%, rgba(253, 140, 0, " + op + ") 16.66%, 33.32%, rgba(255, 229, 0, " + op + ") 33.32%, 49.98%, rgba(17, 159, 11, " + op + ") 49.98%, 66.64%, rgba(6, 68, 179, " + op + ") 66.64%, 83.3%, rgba(194, 46, 220, " + op + ") 83.3%);}";
    var css = css1 + css2;
    */

    var css = ".navbar {     background-image: linear-gradient(180deg, #660000 16.66%,     #653800 16.66%, 33.32%,     #665c00 33.32%, 49.98%,     #064004 49.98%, 66.64%,     #021b47 66.64%, 83.3%,     #4e1358 83.3%);  }  *::-webkit-scrollbar {     width: 12px;                }    *::-webkit-scrollbar-track {     background: rgb(64, 64, 64);            }    *::-webkit-scrollbar-thumb {     background: linear-gradient(180deg, #ff5e5e 16.66%,     #ffb357 16.66%, 33.32%,     #ffed50 33.32%, 49.98%,     #4cb949 49.98%, 66.64%,     #4873bf 66.64%, 83.3%,     #cf61e2 83.3%);         }  *::-webkit-scrollbar-thumb:hover {     background: linear-gradient(180deg, #FE0000 16.66%,     #FD8C00 16.66%, 33.32%,     #FFE500 33.32%, 49.98%,     #119F0B 49.98%, 66.64%,     #0644B3 66.64%, 83.3%,     #C22EDC 83.3%);     }";
    
    var head = document.head || document.getElementsByTagName("head")[0];

    if (document.getElementById("injectedCSS") == null) {
        var style = document.createElement("style");
        style.id = "injectedCSS";
        style.appendChild(document.createTextNode(css));
        head.appendChild(style);
    } else {
        document.getElementById("injectedCSS").innerHTML = css;
    }
 
    prideTXT();
}

function prideAndBlackTheme() {

    var css = ".navbar {     background-image: linear-gradient(180deg, #660000 16.66%,     #653800 16.66%, 33.32%,     #665c00 33.32%, 49.98%,     #064004 49.98%, 66.64%,     #021b47 66.64%, 83.3%,     #4e1358 83.3%);  }  *::-webkit-scrollbar {     width: 12px;                }    *::-webkit-scrollbar-track {     background: rgb(64, 64, 64);            }    *::-webkit-scrollbar-thumb {     background: linear-gradient(180deg, #ff5e5e 16.66%,     #ffb357 16.66%, 33.32%,     #ffed50 33.32%, 49.98%,     #4cb949 49.98%, 66.64%,     #4873bf 66.64%, 83.3%,     #cf61e2 83.3%);         }  *::-webkit-scrollbar-thumb:hover {     background: linear-gradient(180deg, #FE0000 16.66%,     #FD8C00 16.66%, 33.32%,     #FFE500 33.32%, 49.98%,     #119F0B 49.98%, 66.64%,     #0644B3 66.64%, 83.3%,     #C22EDC 83.3%);     }  * {     --color-primary: #000000;     --color-light: #000000;     --color-lighter: #000000;     --color-dark: #000000;     --color-darker: #000000; }";

    var head = document.head || document.getElementsByTagName("head")[0];

    if (document.getElementById("injectedCSS") == null) {
        var style = document.createElement("style");
        style.id = "injectedCSS";
        style.appendChild(document.createTextNode(css));
        head.appendChild(style);
    } else {
        document.getElementById("injectedCSS").innerHTML = css;
    }
 
    prideTXT();
}

function defaultTheme() {
    
    var css = "/*CSS is empty*/";

    var head = document.head || document.getElementsByTagName("head")[0];

    if (document.getElementById("injectedCSS") == null) {
        var style = document.createElement("style");
        style.id = "injectedCSS";
        style.appendChild(document.createTextNode(css));
        head.appendChild(style);
    } else {
        document.getElementById("injectedCSS").innerHTML = css;
    }

    uni2workTXT();
}

function turquoiseYellowTheme() {

    var css = ".navbar { background-image: linear-gradient(132deg, #F4D03F 0%, #16A085 100%); } * { --color-primary: #F4D03F; --color-light: #16A085; --color-lighter: #16A085; --color-dark: #16A085; --color-darker: #16A085; } *::-webkit-scrollbar { width: 12px; } *::-webkit-scrollbar-track { background: rgb(64, 64, 64); } *::-webkit-scrollbar-thumb { background: linear-gradient(132deg, #d7c16a 0%, #4bc6ad 100%); } *::-webkit-scrollbar-thumb:hover { background: linear-gradient(132deg, #F4D03F 0%, #16A085 100%); }";

    var head = document.head || document.getElementsByTagName("head")[0];

    if (document.getElementById("injectedCSS") == null) {
        var style = document.createElement("style");
        style.id = "injectedCSS";
        style.appendChild(document.createTextNode(css));
        head.appendChild(style);
    } else {
        document.getElementById("injectedCSS").innerHTML = css;
    }
 
    uni2workTXT();
}

function bluePurpleTheme() {

    var css = ".navbar { background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%); } * { --color-primary: #FF3CAC; --color-light: #2B86C5; --color-lighter: #2B86C5; --color-dark: #2B86C5; --color-darker: #2B86C5; } *::-webkit-scrollbar { width: 12px; } *::-webkit-scrollbar-track { background: rgb(64, 64, 64); } *::-webkit-scrollbar-thumb { background: linear-gradient(225deg, #ff74c3 0%, #906daf 50%, #5e96be 100%); } *::-webkit-scrollbar-thumb:hover { background: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%); }";

    var head = document.head || document.getElementsByTagName("head")[0];

    if (document.getElementById("injectedCSS") == null) {
        var style = document.createElement("style");
        style.id = "injectedCSS";
        style.appendChild(document.createTextNode(css));
        head.appendChild(style);
    } else {
        document.getElementById("injectedCSS").innerHTML = css;
    }
 
    uni2workTXT();
}

if (localStorage.getItem("activatedTheme") === "prideTheme") {
    prideTheme();
} else if (localStorage.getItem("activatedTheme") === "blackTheme") {
    blackTheme();
} else if (localStorage.getItem("activatedTheme") === "defaultTheme") {
    defaultTheme();
} else if (localStorage.getItem("activatedTheme") === "prideAndBlackTheme") {
    prideAndBlackTheme();
} else if (localStorage.getItem("activatedTheme") === "turquoiseYellowTheme") {
    turquoiseYellowTheme();
} else if (localStorage.getItem("activatedTheme") === "bluePurpleTheme") {
    bluePurpleTheme();
}

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        switch(message.type) {
            case "sendPrideTheme":
                prideTheme();
                console.log("prideTheme activated in content.js");
                localStorage.setItem("activatedTheme", "prideTheme");
                sendResponse("prideSet");
                break;
            case "sendBlackTheme":
                blackTheme();
                console.log("blackTheme activated in content.js");
                localStorage.setItem("activatedTheme", "blackTheme");
                sendResponse("blackSet");
                break;
            case "sendDefaultTheme":
                defaultTheme();
                console.log("defaultTheme activated in content.js");
                localStorage.setItem("activatedTheme", "defaultTheme");
                sendResponse("defaultSet");
                break;
            case "sendPrideAndBlackTheme":
                prideAndBlackTheme();
                console.log("prideAndBlackTheme activated in content.js");
                localStorage.setItem("activatedTheme", "prideAndBlackTheme");
                sendResponse("prideAndBlackSet");
                break;
            case "sendTurquoiseYellowTheme":
                turquoiseYellowTheme();
                console.log("turquoiseYellowTheme activated in content.js");
                localStorage.setItem("activatedTheme", "turquoiseYellowTheme");
                sendResponse("turquoiseYellowThemeSet");
                break;
            case "sendBluePurpleTheme":
                bluePurpleTheme();
                console.log("bluePurpleTheme activated in content.js");
                localStorage.setItem("activatedTheme", "bluePurpleTheme");
                sendResponse("bluePurpleThemeSet");
                break;
            case "popUpClicked":
                console.log("popUp Button was clicked");
                var currentURL = window.location.href;
                sendResponse(currentURL);
                break;
        }
    }
);


    









