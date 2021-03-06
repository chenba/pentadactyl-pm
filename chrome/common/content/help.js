// Copyright (c) 2009-2012 Kris Maglione <kris@vimperator.org>
//
// This work is licensed for reuse under an MIT license. Details are
// given in the LICENSE.txt file included with this file.
"use strict";

function checkFragment() {
    window.document.title = window.document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "title")[0].textContent;

    function action() {
        content.scrollTo(0, content.scrollY + elem.getBoundingClientRect().top - 10); // 10px context
    }

    var frag = window.document.location.hash.substr(1);
    if (frag) {
        var elem = window.document.getElementById(frag);
        if (elem) {
            action();
            setTimeout(action, 10);
        }
    }
}

window.document.addEventListener("load", checkFragment, true);
window.document.addEventListener("hashChange", checkFragment, true);

// vim: set fdm=marker sw=4 sts=4 ts=8 et:
