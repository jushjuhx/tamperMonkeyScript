// ==UserScript==
// @name         修改UserAgent
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  任意修改UA。只对JS获取UA产生影响，不会修改HTTP请求中的UA。
// @author       mounsurf
// @match        *://*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const keyword = "micromessenger";
    const userAgent = window.navigator.userAgent;
    window.navigator.__defineGetter__('userAgent', function() {
        console.log("userAgent sinffered");
        return userAgent + keyword;
    });
})();