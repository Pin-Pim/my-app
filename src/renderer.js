/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';

console.log('👋 This message is being logged by "renderer.js", included via webpack');

console.log("Testing JS")

const buttons = document.querySelectorAll(".button-classic");
const header = document.getElementById("equation");
const valueDisplay = document.getElementById("value");

let equationText = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const btn = button.textContent;

    if (btn === "=") {
      try {
        const result = calculate(equationText);
        valueDisplay.textContent = result;
        header.textContent = equationText;
        equationText = result.toString(); // allows continued operations
      } catch (e) {
        valueDisplay.textContent = "Error";
        equationText = "";
      }
    } else if (btn === "C") {
      equationText = "";
      valueDisplay.textContent = "0";
      header.textContent = "Equation";
    } else {
      equationText += btn;
      header.textContent = equationText;
    }
  });
});

function calculate(equation) {
  if (!/^[\d+]+$/.test(equation)) {
    throw new Error("Invalid input");
  }

  return equation
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b, 0);
}
