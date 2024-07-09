const generateRow = (prev) => {
  let next = [1];

  for (i = 0; i < prev.length - 1; i++) {
    next.push(prev[i] + prev[i + 1]);
  }
  next.push(1);
  return next;
};

const generate = (n) => {
  let row = [1];

  let result = [row];

  for (i = 0; i < n - 1; i++) {
    row = generateRow(row);
    result.push(row);
  }

  return result;
};


console.log(generate(2));