function textnotinner() {
  var textp = document.getElementById('text')
  textp.innerHTML = ""
}

function textinner() {
  var textp = document.getElementById('text');
  var input = document.getElementById('input-t').value;
  textp.innerHTML = textp.innerHTML + " " + input;
}