import Calculator from './Calculator.js'

const calculator = new Calculator()

document.addEventListener('click', (e) => {
  if (e.target.matches('[data-all-clear]')) {
    calculator.clear()
  }

  if (e.target.matches('[data-number]')) {
    calculator.addDigit(e.target.textContent)
  }

  if (e.target.matches('[data-all-delete]')) {
    calculator.removeDigit()
  }

  if (e.target.matches('[data-operation]')) {
    calculator.chooseOperation(e.target.textContent)
  }

  if (e.target.matches('[data-equals]')) {
    calculator.evaluate()
  }
})
