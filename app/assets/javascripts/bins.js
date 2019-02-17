// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener('turbolinks:load', function() {
  var println = function(o) {
    console.log(o);
    consoleElement = document.getElementById('console');
    consoleElement.innerHTML += "<br />" + o;
  };

  var get = function(url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', binsPath);
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.onload = function() {
        if (this.status >= 200 && this.status < 300) {
          resolve(this.response);
        } else {
          reject({
            status: this.status,
            statusText: this.statusText
          });
        }
      };
      xhr.onerror = function() {
        reject({
          status: this.status,
          statusText: this.statusText
        });
      };
      xhr.send();
    });
  };

  println('Hello, world!');
  var dataElement = document.getElementById('data');
  var binsPath = dataElement.getAttribute('data-bins-path');
  get(binsPath)
  .then(function (data) {
    println(data);
  })
  .catch(function(err) {
    if (err) { throw err; }
    println(data);
  });
});
