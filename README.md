# Fizz Buzz

A javascript coding exercise using loops. Write a program that prints the numbers from 1 to 100 and for the multiples of '3' display "Fizz" instead of the number and for the multiples of '5' display "Buzz". If a multiple of both display "FizzBuzz".

---

## Description

The code is structured as several functions with a primary controller exported to the application.

### Reset Display

A function that resets critical components of the display to ensure correct viewing. Hide error and results elements. Clear HTML table.

### Get Values

A function that gets the value of 'fizz' and 'buzz' from the user interface. Returns the values and whether they are valid input.

### Display Error

A function that reveals an error message hidden from view. The message indicates that inputs must be integers greater than 0 in white text on a red background.

### Build Data

A function that generates a series of numbers from a 1 to 100. Replacing each number evenly divisible by 'fizzValue' with "Fizz" and each number evenly divisible by 'buzzValue' with "Buzz". Numbers evenly divisible by both 'fizzValue' and 'buzzValue' are replaced with FizzBuzz. Returns an array containing the series.

### Make Row

A function that takes an array of data and returns the data formatted as an HTML table row. Elements with the value "Fizz", "Buzz", and "FizzBuzz" receive special formatting.

### Display Data

A function that takes an array of data and generates HTML table row markup. Each row is 5 columns long. The markup is inserted into the table element with id "results-table", then the parent element with id "results" is revealed to the user.

### FizzBuzz

The main application function. Calls getValues to get and validate user input. Then displays an error if getValues finds an error in input. Otherwise, calls buildData followed by displayData to generate and display a table to the user.
