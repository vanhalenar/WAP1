/**
 * @module primes
 * @description Basic prime number library
 * @exports isPrime
 * @exports getPrimes
 * @exports iterPrimes
 * @author Timotej Halenár
 */

/**
 * Checks if a number is prime. Used by other functions in the module.
 * Based on https://en.wikipedia.org/wiki/Primality_test#Simple_methods
 * @param {number} n number to check.
 * @returns true if prime, false if not.
 */
function primeCheck(num) {
  if (num <= 1) {
    return false;
  }

  if (num == 2 || num == 3) {
    return true;
  }

  if (num % 2 == 0 || num % 3 == 0) {
    return false;
  }

  for (let i = 5; i <= Math.sqrt(num); i = i + 6) {
    if (num % i == 0 || num % (i + 2) == 0) {
      return false;
    }
  }

  return true;
}

/**
 * Asynchronous function that checks if a number is prime.
 * @param {number} num number to check.
 * @returns true if prime, false if not.
 */
export async function isPrime(num) {
  return primeCheck(num);
}

/**
 * Asynchronous function that returns an array of prime numbers smaller than a specified threshold.
 * @param {number} threshold upper limit of returned array.
 * @returns array of prime numbers smaller than the threshold.
 */
export async function getPrimes(threshold) {
  let primes = [];
  for (let i = 2; i < threshold; i++) {
    if (await isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

/**
 * Generator function that yields prime numbers.
 * @generator
 * @yields next prime number in the sequence.
 */
export function* iterPrimes() {
  let i = 1;
  while (true) {
    i++;
    if (primeCheck(i)) {
      yield i;
    } else {
      continue;
    }
  }
}
