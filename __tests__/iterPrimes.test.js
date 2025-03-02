import { iterPrimes } from "../primes.mjs";

test("get the first 5 primes", () => {
  const generator = iterPrimes();
  const primes = Array.from({ length: 5 }, () => generator.next().value);
  expect(primes).toEqual([2, 3, 5, 7, 11]);
});

test("get the first 10 primes", () => {
  const generator = iterPrimes();
  const primes = Array.from({ length: 10 }, () => generator.next().value);
  expect(primes).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
});

test("check 50th prime", () => {
  const generator = iterPrimes();
  let prime;
  for (let i = 0; i < 50; i++) {
    prime = generator.next().value;
  }
  expect(prime).toBe(229);
});

test("check 100th prime", () => {
  const generator = iterPrimes();
  let prime;
  for (let i = 0; i < 100; i++) {
    prime = generator.next().value;
  }
  expect(prime).toBe(541);
});

test("check 1000th prime", () => {
  const generator = iterPrimes();
  let prime;
  for (let i = 0; i < 1000; i++) {
    prime = generator.next().value;
  }
  expect(prime).toBe(7919);
});
