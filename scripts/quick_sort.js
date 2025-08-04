function Quick_sort() {
  document.getElementById("Worst_Time").innerText = "O(N^2)";
  document.getElementById("Average_Time").innerText = "Θ(NlogN)";
  document.getElementById("Best_Time").innerText = "Ω(NlogN)";
  document.getElementById("Worst_Space").innerText = "O(logN)";
  const startTime = performance.now();
  c_delay = 0;
  quick_sort(0, array_size - 1);
  enable_buttons();
  const endTime = performance.now();
  console.log(Math.round(endTime - startTime));
  setTimeout(
    (document.getElementById("time_taken").innerText = `${Math.round(
      endTime - startTime
    )} milliseconds`),
    endTime - startTime
  );
}
function partition(start, end) {
  var i = start + 1;
  var piv = div_sizes[start]; //make the first element as pivot element.
  div_update(divs[start], div_sizes[start], "yellow"); //Color update
  for (var j = start + 1; j <= end; j++) {
    //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
    if (div_sizes[j] < piv) {
      div_update(divs[i], div_sizes[i], "red"); //Color update
      div_update(divs[j], div_sizes[j], "red"); //Color update
      var temp = div_sizes[i];
      div_sizes[i] = div_sizes[j];
      div_sizes[j] = temp;
      div_update(divs[i], div_sizes[i], "blue"); //Height update
      div_update(divs[j], div_sizes[j], "blue"); //Height update
      i += 1;
    }
  }
  div_update(divs[start], div_sizes[start], "red"); //Color update
  div_update(divs[i - 1], div_sizes[i - 1], "red"); //Color update
  var temp = div_sizes[start]; //put the pivot element in its proper place.
  div_sizes[start] = div_sizes[i - 1];
  div_sizes[i - 1] = temp;
  div_update(divs[start], div_sizes[start], "red"); //Height update
  div_update(divs[i - 1], div_sizes[i - 1], "red"); //Height update
  div_update(divs[i - 1], div_sizes[i - 1], "green"); //Height update

  // for (var t = start; t <= i; t++) {
  //   div_update(divs[t], div_sizes[t], "green"); //Color update
  // }
  return i - 1; //return the position of the pivot
}
function quick_sort(start, end) {
  if (start < end) {
    var pivot = partition(start, end);
    quick_sort(start, pivot - 1);
    quick_sort(pivot + 1, end);
  }
  if (start == end) {
    div_update(divs[start], div_sizes[start], "green"); //Height update
  }
}
