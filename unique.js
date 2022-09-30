const hasUniqueChars = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
};

console.log(hasUniqueChars('Monday'));
// -> True

console.log(hasUniqueChars('Moonday'));
// -> False
