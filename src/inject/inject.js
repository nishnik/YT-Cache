function insert_main() {
    (function(document) {
        "use strict";
        var s = document.createElement("script");
        s.src = chrome.extension.getURL("src/inject/main.js");
        s.onload = function() {
            this.parentNode.removeChild(this);
            s = undefined
        };
        document.documentElement.appendChild(s)
    })(window.document);
}
function insert_video_js() {
    (function(document) {
        "use strict";
        var s = document.createElement("script");
        s.src = chrome.extension.getURL("src/inject/video.min.js");
        s.onload = function() {
            this.parentNode.removeChild(this);
            s = undefined
        };
        document.documentElement.appendChild(s)
    })(window.document);
}
function insert_video_css() {
    (function(document) {
        "use strict";
        var s = document.createElement("link");
        s.href = chrome.extension.getURL("src/inject/video-js.min.css");
        s.rel = "stylesheet";
        document.documentElement.appendChild(s);
        console.log(s);
    })(window.document);
}


insert_main();
insert_video_js();
insert_video_css();

chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  // First, validate the message's structure
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
    var domInfo = "Hello from the other side!";
    response(domInfo);
    insert_main();
    insert_video_js();
    insert_video_css();
  }
});

// YouTube specific transition
document.addEventListener("spfdone", process);
function process() {
    insert_main();
    insert_video_js();
    insert_video_css();
}
