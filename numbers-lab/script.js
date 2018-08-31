let year = new Date().getFullYear()

document.addEventListener("DOMContentLoaded", function() {
  let oneButton = document.getElementById('one-fact')
  oneButton.addEventListener('click', fetchOneFact)
  let numberInput = document.getElementById('select-number')

  numberInput.addEventListener('change', fetchFact)

  let manyFactsButton = document.getElementById('many-facts')
  manyFactsButton.addEventListener('click', fetchManyFacts)

  setInterval(getYear, 5000)
})

function fetchManyFacts() {
  for (i=1; i <= 100; i++) {
    fetch('http://numbersapi.com/random/trivia')
    .then(response => response.text())
    .then(manyFactsData => renderManyFacts(manyFactsData))
  }
}

function renderManyFacts(manyFactsData) {
  let manyFactsDiv = document.getElementById('all-the-facts')
  let fact = document.createElement('p')
  fact.innerText = manyFactsData

  manyFactsDiv.appendChild(fact)
}

function fetchOneFact() {
  fetch('http://numbersapi.com/1/')
  .then(response => response.text())
  .then(oneData => renderOneFact(oneData))
}


function renderOneFact(oneData) {
  let oneSection = document.getElementById('one')
  let oneFact = document.createElement('p')
  oneFact.innerText = oneData
  oneSection.appendChild(oneFact)
}

function fetchFact() {
  let numberInputValue = document.getElementById('select-number').value

  fetch(`http://numbersapi.com/${numberInputValue}`)
  .then(response => response.text())
  .then(numberFact => renderFact(numberFact))


}

function renderFact(numberFact) {
  let pickNumberDiv = document.getElementById('pick-number')

  let newFact = document.createElement('p')
  newFact.innerText = numberFact
  pickNumberDiv.appendChild(newFact)
}

function getYear() {
  fetchYearFact(year)
  year--
}

function fetchYearFact(i) {
  fetch(`http://numbersapi.com/${i}/year`)
  .then(response => response.text())
  .then(yearFact => renderYearFact(yearFact))
}

function renderYearFact(yearFact) {
  let body = document.querySelector('body')
  let newYearFact = document.createElement('p')
  newYearFact.innerText = yearFact

  body.appendChild(newYearFact)
}
