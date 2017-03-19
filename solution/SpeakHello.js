(function (window) {
    var helloSpeaker = {};
    helloSpeaker.Speak = function (name) {
        console.log("Hello " + name + "<br/>");
    };
    window.helloSpeaker = helloSpeaker;
})(window);

