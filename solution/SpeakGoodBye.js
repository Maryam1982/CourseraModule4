(function (window) {
    var goodByeSpeaker = {};
    goodByeSpeaker.Speak = function (name) {
        console.log("Good Bye " + name + "<br/>");
    };
    window.goodByeSpeaker = goodByeSpeaker;
})(window);
