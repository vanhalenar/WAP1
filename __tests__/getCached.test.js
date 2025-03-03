import { isPrime, getPrimes, iterPrimes, getCached } from "../primes.mjs";

beforeAll(async () => {
  await getPrimes(10);
});

test("check cache", async () => {
  expect(getCached().get(3)).toEqual(true);
});

test("check cache", async () => {
  expect(getCached().get(7)).toEqual(true);
});

test("check cache", async () => {
  expect(getCached().get(11)).toEqual(undefined);
});

test("check cache", async () => {
  expect(getCached().get(0)).toEqual(false);
});

test("check cache", async () => {
  expect(getCached().get(4)).toEqual(false);
});
