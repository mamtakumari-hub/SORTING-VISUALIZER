function Optimised_Bubble_sort() {
  document.getElementById("Worst_Time").innerText = "O(N^2)";
  document.getElementById("Average_Time").innerText = "Θ(N^2)";
  document.getElementById("Best_Time").innerText = "Ω(N)";
  document.getElementById("Worst_Space").innerText = "O(1)";

  c_delay = 0;
  const startTime = performance.now();
  for (var i = 0; i < array_size; i++) {
    var flag = false;
    for (var j = 0; j < array_size - i - 1; j++) {
      div_update(divs[j], div_sizes[j], "yellow"); // Color Update
      if (div_sizes[j] > div_sizes[j + 1]) {
        // change color of both
        flag = true;
        div_update(divs[j], div_sizes[j], "red");
        div_update(divs[j + 1], div_sizes[j + 1], "red");
        var temp = div_sizes[j];
        div_sizes[j] = div_sizes[j + 1];
        div_sizes[j + 1] = temp;
        div_update(divs[j], div_sizes[j], "red");
        div_update(divs[j + 1], div_sizes[j + 1], "red");
      }
      // make the current element blue it has been compared
      div_update(divs[j], div_sizes[j], "blue");
    }
    // make the lasst one green ie reached its correct position
    div_update(divs[j], div_sizes[j], "green");
    if (flag == false) break;
  }
  div_update(divs[0], div_sizes[0], "green");
  const endTime = performance.now();
  console.log(Math.round(endTime - startTime));
  setTimeout(
    (document.getElementById("time_taken").innerText = `${Math.round(
      endTime - startTime
    )} milliseconds`),
    endTime - startTime
  );
  // enable the disabled buttons
  enable_buttons();
}
