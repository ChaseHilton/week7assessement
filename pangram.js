const isPangram = (str) => {
  str = str.toLowerCase().split('');

  const alphabet = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  for (let i = 0; i < str.length; i++) {
    if (alphabet[str[i]] === 0) {
      alphabet[str[i]] += 1;
    }
  }

  for (let key in alphabet) {
    if (alphabet[key] === 0) {
      return false;
    }
  }

  return true;
};

// o(n)

//space = o(n)

console.log(isPangram('The quick brown fox jumps over the lazy dog!'));
// -> True

console.log(isPangram('I like cats, but not mice'));
// -> False
