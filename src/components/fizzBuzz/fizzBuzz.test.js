import fizzBuzz from "./fizzBuzz.js";

test("primeiro elemento é 1", () => {
	const result = fizzBuzz();
	expect(result[0]).toBe(1);
});

test("múltiplos de 3 são Fizz", () => {
	const result = fizzBuzz();
	expect(result[2]).toBe("Fizz");
	expect(result[5]).toBe("Fizz");
});

test("múltiplos de 5 são Buzz", () => {
	const result = fizzBuzz();
	expect(result[4]).toBe("Buzz");
	expect(result[9]).toBe("Buzz");
});

test("múltiplos de 3 e 5, são FizzBuzz", () => {
	const result = fizzBuzz();
	expect(result[14]).toBe("FizzBuzz");
});
