const findLongestWord = (arr) => {
  let longestLength = 0;

  arr.forEach((word) => {
    if (word.length > longestLength) {
      longestLength = word.length;
    }
  });

  return longestLength;
};

// o(n)

// space = o(n)

console.log(findLongestWord(['hi', 'hello']));
// -> 5
