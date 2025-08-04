function Merge_sort() {
  //Setting Time complexities
  document.getElementById("Worst_Time").innerText = "O(NlogN)";
  document.getElementById("Average_Time").innerText = "Θ(NlogN)";
  document.getElementById("Best_Time").innerText = "Ω(NlogN)";
  document.getElementById("Worst_Space").innerText = "O(N)";

  c_delay = 0;
  const startTime = performance.now();
  merge_partition(0, array_size - 1);
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
function merge(start, mid, end) {
  var p = start,
    q = mid + 1;
  var Arr = [],
    k = 0;
  while (p <= mid && q <= end) {
    if (div_sizes[p] < div_sizes[q]) {
      Arr[k++] = div_sizes[p++];
      div_update(divs[p - 1], div_sizes[p - 1], "red"); //Color update
    } else {
      Arr[k++] = div_sizes[q++];
      div_update(divs[q - 1], div_sizes[q - 1], "red"); //Color update
    }
  }
  while (p <= mid) {
    Arr[k++] = div_sizes[p++];
    div_update(divs[p - 1], div_sizes[p - 1], "red"); //Color update
  }
  while (q <= end) {
    Arr[k++] = div_sizes[q++];
    div_update(divs[q - 1], div_sizes[q - 1], "red"); //Color update
  }
  for (var t = 0; t < k; t++) {
    div_sizes[start++] = Arr[t];
    div_update(divs[start - 1], div_sizes[start - 1], "green"); //Color update
  }
}

function merge_partition(start, end) {
  if (start < end) {
    var mid = Math.floor((start + end) / 2);
    div_update(divs[mid], div_sizes[mid], "yellow"); //Color update
    merge_partition(start, mid);
    merge_partition(mid + 1, end);
    merge(start, mid, end);
  }
}
