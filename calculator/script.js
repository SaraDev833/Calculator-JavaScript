let resultDisplayed = false;

function appendValue(value) {
  const inputValue = document.getElementById("input");
  if (resultDisplayed) {
    inputValue.value = "";
    resultDisplayed = false;
  }

  if (value === "00" && inputValue.value === "0") {
    return;
  } else {
    inputValue.value += value;
  }
}
function calculate() {
  const inputField = document.getElementById("input");
  let expression = inputField.value.trim();

  expression = expression.replace(/(\d+)%/g, "($1/100)");

  try {
    const result = new Function("return " + expression)();
    inputField.value = result;
    resultDisplayed = true;
  } catch (error) {
    inputField.value = "error";
    resultDisplayed = "false";
  }
}

function clearAll() {
  document.getElementById("input").value = "";
  resultDisplayed = false;
}
function deleteLast() {
  const inputField = document.getElementById("input");
  inputField.value = inputField.value.slice(0, -1);
  resultDisplayed = false;
}
