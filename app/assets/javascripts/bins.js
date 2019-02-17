// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener('turbolinks:load', function() {
  var println = function(o) {
    console.log(o);
    consoleElement = document.getElementById('console');
    consoleElement.innerHTML += "<br />" + o;
  };

  var get = function(url, done) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', binsPath);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onload = function() {
      done(null, this.response);
    };
    xhr.onerror = function() {
      done(this.response);
    };
    xhr.send();
  };

  println('Hello, world!');
  var dataElement = document.getElementById('data');
  var binsPath = dataElement.getAttribute('data-bins-path');
  get(binsPath, function(err, data) {
    if (err) { throw err; }
    println(data);
  });
});
