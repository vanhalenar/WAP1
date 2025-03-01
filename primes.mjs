/**
 * @module primes
 * @description Prime number library
 * @exports isPrime
 * @exports getPrimes
 * @exports iterPrimes
 * @author Timotej Halenár
 */

/**
 * Function that checks if a number is prime.
 * @param {number} n number to check
 * @returns true if prime, false if not
 */
function primeCheck(n) {
  if (n <= 1) return false;

  if (n == 2 || n == 3) return true;

  if (n % 2 == 0 || n % 3 == 0) return false;

  for (let i = 5; i <= Math.sqrt(n); i = i + 6)
    if (n % i == 0 || n % (i + 2) == 0) return false;

  return true;
}

/**
 * Asynchronous function that checks if a number is prime.
 * @param {number} num number to check
 * @returns true if prime, false if not
 */
export async function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

/**
 * Asynchronous function that returns an array of prime numbers smaller than threshold.
 * @param {number} threshold upper limit of returned array
 * @returns array of prime numbers smaller than the threshold
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
 * @yields next prime number in the sequence
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
