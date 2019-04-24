// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function firstChunk(array, size) {
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length -1]
    if (!last | last.length === size) {
      chunked.push([element]);

    }
    else {
      last.push(element);
    }
  }
  return chunked;
}


function chunk(array, size) {
  let i = 0
  const chunked = []
  while (i < array.length) {
    chunked.push(array.slice(i, size+i))
    i = i + size
  }
  return chunked
}

module.exports = chunk;
