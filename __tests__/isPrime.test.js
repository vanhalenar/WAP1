import { isPrime } from "../primes.mjs";

test("2 is prime", () => {
  return isPrime(2).then((data) => {
    expect(data).toBe(true);
  });
});

test("3 is prime", () => {
  return isPrime(3).then((data) => {
    expect(data).toBe(true);
  });
});

test("11 is prime", () => {
  return isPrime(11).then((data) => {
    expect(data).toBe(true);
  });
});

test("2 is prime", () => {
  return isPrime(2).then((data) => {
    expect(data).toBe(true);
  });
});

test("4159 is prime", () => {
  return isPrime(4159).then((data) => {
    expect(data).toBe(true);
  });
});

test("6803 is prime", () => {
  return isPrime(6803).then((data) => {
    expect(data).toBe(true);
  });
});

test("939391 is prime", () => {
  return isPrime(939391).then((data) => {
    expect(data).toBe(true);
  });
});

test("35317 is prime", () => {
  return isPrime(35317).then((data) => {
    expect(data).toBe(true);
  });
});

test("4393139 is prime", () => {
  return isPrime(4393139).then((data) => {
    expect(data).toBe(true);
  });
});

test("87178291199 is prime", () => {
  return isPrime(87178291199).then((data) => {
    expect(data).toBe(true);
  });
});

test("1 is not prime", () => {
  return isPrime(1).then((data) => {
    expect(data).toBe(false);
  });
});

test("4 is not prime", () => {
  return isPrime(4).then((data) => {
    expect(data).toBe(false);
  });
});

test("10 is not prime", () => {
  return isPrime(10).then((data) => {
    expect(data).toBe(false);
  });
});

test("15 is not prime", () => {
  return isPrime(15).then((data) => {
    expect(data).toBe(false);
  });
});

test("-1 is not prime", () => {
  return isPrime(-1).then((data) => {
    expect(data).toBe(false);
  });
});

test("12345 is not prime", () => {
  return isPrime(12345).then((data) => {
    expect(data).toBe(false);
  });
});

test("10000000000 is not prime", () => {
  return isPrime(10000000000).then((data) => {
    expect(data).toBe(false);
  });
});

test("0 is not prime", () => {
  return isPrime(0).then((data) => {
    expect(data).toBe(false);
  });
});

test("1234567890 is not prime", () => {
  return isPrime(1234567890).then((data) => {
    expect(data).toBe(false);
  });
});

test("-2 is not prime", () => {
  return isPrime(-2).then((data) => {
    expect(data).toBe(false);
  });
});
