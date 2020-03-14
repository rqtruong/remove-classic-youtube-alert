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

    // Your code here...
    document.getElementById("old-browser-alert").remove();
})();