// Abstraction repeatition
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

// Functions that provide new types of control flow
function unless(test, then) {
  if (!test) then();
}

repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});