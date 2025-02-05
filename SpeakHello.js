(function(window) {
  var speakWord = "Hello";
  var helloSpeaker = {};
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
    document.querySelector('tr').outerHTML+='<tr><td>'+speakWord+'</td><td>'+name+'</td></tr>';
  };
  window.helloSpeaker = helloSpeaker;
})(window);
