
(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul",
        "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i< names.length; i++)
    {
        if (names[i].substring(0,1).toUpperCase() == "J")
        {
            goodByeSpeaker.Speak(names[i]);
        }
        else {
            helloSpeaker.Speak(names[i]);
        }
    }
})();


