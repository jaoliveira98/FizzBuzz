import React from "react";
import fizzBuzz from "./fizzBuzz.js";

const FizzBuzz = () => {
	return (
		<>
			{fizzBuzz().map((item, index) => (
				<p key={index} className="border-b py-3">
					{item}
				</p>
			))}
		</>
	);
};

export default FizzBuzz;
