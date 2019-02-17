// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener('turbolinks:load', function() {
  var dataElement = document.getElementById('data');
  var binsPath = dataElement.getAttribute('data-bins-path');
  var csrfToken = document.querySelector('meta[name=csrf-token]').getAttribute('content');

  var println = function(o) {
    console.log(o);
    consoleElement = document.getElementById('console');
    consoleElement.innerHTML += "<br />" + o;
  };

  var req = function(method, url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader('Accept', 'application/json');
      if (method != 'GET') {
        xhr.setRequestHeader('X-CSRF-Token', csrfToken);
      }
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

  var incrementBin = function(ev) {
    elem = ev.target;
    if (!elem.classList.contains('increment_button'))
      return;
    var id = elem.getAttribute('data-id');
    var incrementPath = binsPath + "/" + id + "/increment";
    req('POST', incrementPath)
    .then(function (data) {
      println(data);
      elem.text = "" + (parseInt(elem.text) + 1);
    })
    .catch(function(err) {
      if (err) { throw err; }
      println(data);
    });
  };

  println('Hello, world!');

  req('GET', binsPath)
  .then(function (data) {
    println(data);
  })
  .catch(function(err) {
    if (err) { throw err; }
    println(data);
  });

  document.getElementById('bin_table').addEventListener('click', incrementBin);
});
