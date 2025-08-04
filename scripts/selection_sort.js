function Selection_sort() {
  document.getElementById("Worst_Time").innerText = "O(N^2)";
  document.getElementById("Average_Time").innerText = "Θ(N^2)";
  document.getElementById("Best_Time").innerText = "Ω(N)";
  document.getElementById("Worst_Space").innerText = "O(1)";
  c_delay = 0;
  const startTime = performance.now();
  for (var i = 0; i < array_size; i++) {
    var maxIndex = 0;
    for (var j = 1; j < array_size - i; j++) {
      div_update(divs[j], div_sizes[j], "yellow");
      if (div_sizes[j] > div_sizes[maxIndex]) {
        div_update(divs[maxIndex], div_sizes[maxIndex], "blue");
        maxIndex = j;
        div_update(divs[maxIndex], div_sizes[maxIndex], "red");
      }
      div_update(divs[j], div_sizes[j], "blue");
    }
    div_update(divs[maxIndex], div_sizes[maxIndex], "red");
    div_update(divs[array_size - i - 1], div_sizes[array_size - i - 1], "red");
    var temp = div_sizes[array_size - i - 1];
    div_sizes[array_size - i - 1] = div_sizes[maxIndex];
    div_sizes[maxIndex] = temp;
    div_update(divs[maxIndex], div_sizes[maxIndex], "red");
    div_update(divs[array_size - i - 1], div_sizes[array_size - i - 1], "red");
    div_update(divs[j], div_sizes[j], "green");
  }
  div_update(divs[0], div_sizes[0], "green");
  // enable the disabled buttons
  enable_buttons();
  const endTime = performance.now();
  console.log(Math.round(endTime - startTime));
  setTimeout({}, endTime - startTime);
  setTimeout(
    (document.getElementById("time_taken").innerText = `${Math.round(
      endTime - startTime
    )} milliseconds`),
    endTime - startTime
  );
}
