// taking all the parameters of the array and algo
var inputarray_size = document.getElementById("array_size");
var array_size = inputarray_size.value;
var input_generate = document.getElementById("array_generate");
var input_algo_speed = document.getElementById("algo_speed");
var algo_buttons = document.querySelectorAll(".algos button");
console.log("input_generate", input_generate);
console.log("input_algo_speed", input_algo_speed);
console.log("algo_buttons", algo_buttons);
console.log("inputarray_size", inputarray_size);
var div_sizes = [];
var divs = [];
var margin_size;
var container_for_array = document.getElementById("Array_Container");
// formulate  Generate array and update frunctions  here
// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
function generate_array() {
  container_for_array.innerHTML = "";
  for (var i = 0; i < array_size; i++) {
    div_sizes[i] =
      Math.floor(
        Math.random() * 0.5 * (inputarray_size.max - inputarray_size.min)
      ) + 10;
    divs[i] = document.createElement("div");
    container_for_array.appendChild(divs[i]);
    margin_size = 0.1;
    divs[i].style =
      " margin:0% " +
      margin_size +
      `%;transition: height ${
        10000 / input_algo_speed
      } ease-in-out; background-color:blue; width:` +
      (100 / array_size - 2 * margin_size) +
      "%; height:" +
      div_sizes[i] +
      "%;";
    // await sleep(100);
  }
  // await sleep(100);
}

function update_array_size() {
  array_size = inputarray_size.value;
  generate_array();
}
input_generate.addEventListener("click", generate_array);
inputarray_size.addEventListener("input", update_array_size);
window.onload = update_array_size();
function disable_buttons() {
  for (var i = 0; i < algo_buttons.length; i++) {
    algo_buttons.classList = [];
    algo_buttons[i].classList.add("locked_button");
    algo_buttons[i].disabled = true;
    input_algo_speed.disabled = true;
    input_generate.disabled = true;
    input_algo_speed.disabled = true;
  }
}
function runalgo() {
  disable_buttons();
  this.classList.add("algobutton_selected");
  switch (this.innerHTML) {
    case "Bubble":
      Bubble_sort();
      break;
    case "Optimised_Bubble":
      Optimised_Bubble_sort();
      break;
    case "Selection":
      Selection_sort();
      break;
    case "Insertion":
      Insertion_sort();
      break;
    case "Merge":
      Merge_sort();
      break;
    case "Quick":
      Quick_sort();
      break;
    case "Heap":
      Heap_sort();
      break;
  }
}
for (var i = 0; i < algo_buttons.length; i++) {
  algo_buttons[i].addEventListener("click", runalgo);
}
