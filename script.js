document.addEventListener("DOMContentLoaded", function() {
  let button = document.getElementById('get-location')
  button.addEventListener('click', fetchLocation)
  fetchPeople()
})


function fetchLocation() {
  fetch('http://api.open-notify.org/iss-now.json')
  .then(response => response.json())
  .then(issData => renderLocation(issData))
}

function renderLocation(issData) {
  let locationDiv = document.getElementById('location-div')
  let latAndLong = document.createElement('p')
  latAndLong.innerHTML = `Location: (${issData.iss_position.latitude}, ${issData.iss_position.longitude})`
  locationDiv.appendChild(latAndLong)
}

function fetchPeople() {
  fetch('http://api.open-notify.org/astros.json')
  .then(response => response.json())
  .then(astrosData => renderAstros(astrosData))
}

function renderAstros(astrosData) {
  // show number of people in space
  let peopleDiv = document.getElementById('people-div')
  let numOfPeople = document.createElement('h3')
  numOfPeople.innerHTML = `${astrosData.number} people in space`
  peopleDiv.appendChild(numOfPeople)

  // list names
  let peopleList = document.createElement('ul')
  let peopleData = astrosData.people
  peopleDiv.appendChild(peopleList)

  peopleData.forEach(function(person) {
    let personLi = document.createElement('li')
    personLi.innerHTML = person.name
    peopleList.appendChild(personLi)
  })
}
