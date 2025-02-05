(function(window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Loop over the names array
  for (var i = 0; i < names.length; i++) {
    // Retrieve the first letter of the current name
    var firstLetter = names[i].charAt(0).toLowerCase();

    // Compare the 'firstLetter' to 'j' and call the appropriate speak method
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})(window);
