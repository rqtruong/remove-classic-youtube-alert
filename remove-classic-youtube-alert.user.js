// ==UserScript==
// @name         Remove classic YouTube alert
// @namespace    https://richardqtruong.com
// @version      1.0
// @description  Removes the alert on classic YouTube warning that "This version of YouTube is going away soon"
// @author       Richard Truong
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById("old-browser-alert").remove();

    // listen for creation of more alerts and remove those as well
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            for (var i = 0; i < mutation.addedNodes.length; i++){
                console.log(mutation.addedNodes[i].id);
                if(mutation.addedNodes[i].id === "old-browser-alert"){
                    document.getElementById("old-browser-alert").remove();
                }
            }
        })
    });
    observer.observe(document.getElementById("page"), { childList: true, subtree: true });
})();