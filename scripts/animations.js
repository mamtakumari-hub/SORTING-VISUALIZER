var speed = 1000;
input_algo_speed.addEventListener("input", visualization_speed);
function visualization_speed() {
  var algo_speed = input_algo_speed.value;
  switch (parseInt(algo_speed)) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 10000;
      break;
  }
  delay_time = 10000 / (Math.floor(array_size / 10) * speed);
}
var delay_time = 10000 / (Math.floor(array_size / 10) * speed);
var c_delay = 0;

function div_update(cont, height, color) {
  window.setTimeout(function () {
    cont.style =
      " margin:0% " +
      margin_size +
      "%; width:" +
      (100 / array_size - 2 * margin_size) +
      "%; height:" +
      height +
      "%; background-color:" +
      color +
      ";";
  }, (c_delay += delay_time));
}

function enable_buttons() {
  window.setTimeout(function () {
    for (var i = 0; i < algo_buttons.length; i++) {
      algo_buttons.classList = [];
      algo_buttons[i].classList.add("algobutton_unselected");
      algo_buttons[i].disabled = false;
      input_algo_speed.disabled = false;
      input_generate.disabled = false;
      input_algo_speed.disabled = false;
    }
  }, (c_delay += delay_time));
}
