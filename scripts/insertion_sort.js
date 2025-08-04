function Insertion_sort() {
  document.getElementById("Worst_Time").innerText = "O(N^2)";
  document.getElementById("Average_Time").innerText = "Θ(N^2)";
  document.getElementById("Best_Time").innerText = "Ω(N)";
  document.getElementById("Worst_Space").innerText = "O(1)";
  c_delay = 0;
  div_update(divs[0], div_sizes[0], "green");
  const startTime = performance.now();
  for (var i = 1; i < array_size; i++) {
    var j = i - 1;
    while (j >= 0 && div_sizes[j] > div_sizes[j + 1]) {
      div_update(divs[j], div_sizes[j], "red");
      div_update(divs[j + 1], div_sizes[j + 1], "red");
      var temp = div_sizes[j + 1];
      div_sizes[j + 1] = div_sizes[j];
      div_sizes[j] = temp;
      div_update(divs[j], div_sizes[j], "red");
      div_update(divs[j + 1], div_sizes[j + 1], "red");
      j--;
    }
    j = i;
    while (j >= 0) {
      div_update(divs[j], div_sizes[j], "green");
      j--;
    }
    div_update(divs[j + 1], div_sizes[j + 1], "green");
  }
  div_update(divs[array_size - 1], div_sizes[array_size - 1], "green");
  const endTime = performance.now();
  console.log(Math.round(endTime - startTime));
  setTimeout(
    (document.getElementById("time_taken").innerText = `${Math.round(
      endTime - startTime
    )} milliseconds`),
    endTime - startTime
  );

  enable_buttons();
}
