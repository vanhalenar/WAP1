function isPrime(num) {
  return new Promise(function (resolve, reject) {
    if (num <= 1) {
      resolve(false);
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        resolve(false);
      }
    }
    resolve(true);
  });
}

function getPrimes(threshold) {
  return new Promise(function (resolve, reject) {
    let arr = [];
    for (let i = 2; i <= threshold; i++) {
      if (isPrime(i)) {
        arr.push(i);
      }
    }
    resolve(arr);
  });
}

function iterPrimes() {}

(async function () {
  /// 1: isPrime vrací Promise
  isPrime(2).then((result) => console.log("2: ", result));
  isPrime(3).then((result) => console.log("3: ", result));
  isPrime(4).then((result) => console.log("4: ", result));
  isPrime(5).then((result) => console.log("5: ", result));
  isPrime(6).then((result) => console.log("6: ", result));
  isPrime(7).then((result) => console.log("7: ", result));
  isPrime(2).then((result) => console.log("2: ", result));
  /// 2: getPrimes vrací prvočísla V Promise
  getPrimes(1000).then((primes) => console.log(primes.join(", ")));
  /// 3: generátor iterPrimes
  /* for (let prime of iterPrimes()) {
		if (prime > 1000) {
			console.log("1009:", prime === 1009);
			break;
		}
	} */
})();
