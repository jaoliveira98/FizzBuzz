import React from "react";
import Card from "../../components/Card";
import FizzBuzz from "../../components/fizzbuzz/FizzBuzz.jsx";

const Homepage = () => {
	return (
		<div className="flex h-full items-center justify-center">
			<Card header="Fizz or Buzz?" footer="Certified Scrum Developer 2023">
				<FizzBuzz />
			</Card>
		</div>
	);
};

export default Homepage;
