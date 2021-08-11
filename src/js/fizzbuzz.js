const resetDisplay = () => {
  const errorMessage = document.getElementById("error");
  const results = document.getElementById("results");
  const resultsTable = document.getElementById("results-table");

  errorMessage.setAttribute("hidden", true);
  errorMessage.setAttribute("aria-hidden", true);
  results.setAttribute("aria-hidden", true);
  results.setAttribute("hidden", true);
  resultsTable.innerHTML = "";
};

const getValues = () => {
  const fizz = parseInt(document.getElementById("fizz").value);
  const buzz = parseInt(document.getElementById("buzz").value);

  const validInput =
    Number.isInteger(fizz) && fizz >= 1 && Number.isInteger(buzz) && buzz >= 1;

  return { error: !validInput, fizz, buzz };
};

const displayError = () => {
  const errorMessage = document.getElementById("error");

  errorMessage.removeAttribute("hidden");
  errorMessage.removeAttribute("aria-hidden");
};

const buildData = (fizz, buzz) => {
  const fbData = [];
  for (let i = 1; i <= 100; i++) {
    let fb = "";
    if (i % fizz === 0) fb += "Fizz";
    if (i % buzz === 0) fb += "Buzz";
    fb === "" ? fbData.push(i) : fbData.push(fb);
  }
  return fbData;
};

const makeRow = (rowData) => {
  let html = "<tr>";
  for (const i of rowData) {
    html += `<td class="${i}">${i}</td>`;
  }
  return html + "</tr>";
};

const displayData = (fbData) => {
  const resultsTable = document.getElementById("results-table");
  const results = document.getElementById("results");

  for (let i = 0; i < fbData.length; i = i + 5) {
    const rowData = [];
    for (let j = i; j < i + 5; j++) {
      rowData.push(fbData[j]);
    }
    resultsTable.innerHTML += makeRow(rowData);
  }

  results.removeAttribute("hidden");
  results.removeAttribute("aria-hidden");
};

const fizzBuzz = () => {
  resetDisplay();
  const { fizz, buzz, error } = getValues();
  if (error) return displayError();
  const fbData = buildData(fizz, buzz);
  displayData(fbData);
};

export { fizzBuzz };
