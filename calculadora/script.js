
const calculatorOutput = document.getElementById("output")
const numbers = document.getElementsByName("button")
const expressions = document.getElementsByName("expression")
let num1 = ""
let expression = ""
let num2 = ""

let string = ""

let typingNumber = 1

function escribe() {
    string = `${num1} ${expression} ${num2}`
}

numbers.forEach((b) => {
    b.addEventListener('click', () => {
        if (typingNumber === 1) {
            num1 += b.textContent
            escribe()
            alert(string)
        } else {
            num2 += b.textContent
            escribe()
            alert(string)
        }

    })
})

expressions.forEach((e) => {
    e.addEventListener('click', () => {
        expression = " " + e.textContent + " "
        escribe()
        typingNumber = 2
        alert(string)
    })
})


function calculate() {
    if (calculatorOutput.textContent.trim() !== "") {
        calculatorOutput.innerText = math.evaluate(calculatorOutput.textContent)
    }
}