const display = document.getElementById("display")

function appendToDiplay(input) {

}
function appendToDiplay(input) {
    display.value += input; // Add the button's value to the display
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
    try {
        display.value = eval(display.value)

    } catch (error) {
        display.value = "erorr"
    }
}