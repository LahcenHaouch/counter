const counterId = '#counter'
const decreaseId = '#decrease'
const resetId = '#reset'
const increaseId = '#increase'

const getElement = (selector) => document.querySelector(selector)

const decreaseButton = getElement(decreaseId)
const resetButton = getElement(resetId)
const increaseButton = getElement(increaseId)
const counter = getElement(counterId)

getElement(counterId).textContent = 0

decreaseButton.addEventListener('click', () => {
  counter.textContent = counter.textContent - 1
})

resetButton.addEventListener('click', () => {
  counter.textContent = 0
})

increaseButton.addEventListener('click', () => {
  counter.textContent = parseInt(counter.textContent, 10) + 1
})
