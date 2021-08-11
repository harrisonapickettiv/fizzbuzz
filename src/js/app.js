import { fizzBuzz } from "./fizzbuzz";

document.getElementById("btnSubmit").onclick = (event) => {
  event.preventDefault();
  fizzBuzz();
};
