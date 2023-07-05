# Fizz, Buzz or FizzBuzz?

This code defines and exports a function named fizzBuzz that implements the FizzBuzz game. The FizzBuzz game is a simple counting game where players take turns counting up from 1, but with some rules:

- For numbers that are **divisible by both 3 and 5**, the player says “**FizzBuzz**” instead of the number.
- For numbers that are **divisible by only 3**, the player says “**Fizz**” instead of the number.
- For numbers that are **divisible by only 5**, the player says “**Buzz**” instead of the number.
- For **all other numbers**, the player says the **number itself**.

The fizzBuzz function in this code generates an array of values representing the output of the FizzBuzz game for numbers from 1 to 100. It can be imported and used by other modules to generate and display the FizzBuzz sequence.

## Installation

1. Open a terminal and navigate to the root directory of your project.

```bash
cd ./FizzBuzz
```

2. Run ***npm install*** to install all the dependencies listed in your package.json file. This command will read the package.json file and install all the packages listed under dependencies and devDependencies.
```bash
npm install
```

3. Once the installation is complete, you can start the development server by running ***npm run dev***. This command will execute the script defined under the dev key in the scripts section of your package.json file. In this case, it will run the vite command, which starts the Vite development server.
```bash
npm run dev
```

4. This will start the Vite development server and you should be able to access your app at ***http://localhost:3000***. You can open this URL in your web browser to view your app.
