const counterId = '#counter'
const decreaseId = '#decrease'
const resetId = '#reset'
const increaseId = '#increase'

const getElement = (selector) => document.querySelector(selector)

const decreaseButton = getElement(decreaseId)
const resetButton = getElement(resetId)
const increaseButton = getElement(increaseId)

getElement(counterId).textContent = 0

decreaseButton.addEventListener('click', () => {
  const counter = getElement(counterId)

  counter.textContent = counter.textContent - 1
})

resetButton.addEventListener('click', () => {
  const counter = getElement(counterId)

  counter.textContent = 0
})

increaseButton.addEventListener('click', () => {
  const counter = getElement(counterId)

  counter.textContent = parseInt(counter.textContent, 10) + 1
})
