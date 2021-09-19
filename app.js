const clear = document.querySelector(".clear-all")
const back = document.querySelector(".back-space")
const percent = document.querySelector(".percent")
const operators = document.querySelectorAll(".op")
const nums = document.querySelectorAll(".num")
const equal = document.querySelector(".equal")
const output = document.querySelector(".final")
const operating = document.querySelector(".operating")


let value = 0
let equation = ""

clear.addEventListener("click", () => {
    output.value = ""
    operating.textContent = ""
    value = 0
    equation = ""
})

back.addEventListener("click", () => {
    output.value = output.value.slice(0, -1)
})

percent.addEventListener("click", () => {
    if (output.value !== "") {
        value = eval(output.value / 100)
        output.value = value
    }
})

nums.forEach((num) => {
    num.addEventListener("click", () => {
        output.value += num.textContent
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (operating.textContent !== "" && output.value !== "") {
            equation += output.value
            calculate()
            operating.textContent = value
            equation = operating.textContent + operator.textContent
        } else {
            equation = output.value + operator.textContent
            operating.textContent = output.value
        }
        output.value = ""
    })
})

equal.addEventListener("click", () => {
    equation += output.value
    calculate()
    operating.textContent = ""
    output.value = value
})

function calculate() {
    let answer = 0
    if (equation.includes("+")) {
        answer = equation.split("+")
        answer = eval(answer[0]) + eval(answer[1])
    } else if (equation.includes("-")) {
        answer = equation.split("-")
        answer = eval(answer[0]) - eval(answer[1])
    } else if (equation.includes("*")) {
        answer = equation.split("*")
        answer = eval(answer[0]) * eval(answer[1])
    } else if (equation.includes("/")) {
        answer = equation.split("/")
        answer = eval(answer[0]) / eval(answer[1])
    }

    value = answer
}


