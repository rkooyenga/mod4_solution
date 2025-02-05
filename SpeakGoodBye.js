(function(window) {
  var speakWord = "Good Bye";
  var byeSpeaker = {};
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
    document.querySelector('tr').outerHTML+='<tr><td>'+speakWord+'</td><td>'+name+'</td></tr>';
  };
  window.byeSpeaker = byeSpeaker;
})(window);
