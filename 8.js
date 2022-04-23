let states = {};
function addState(state) {
  states = {...states,[state] : []};
  return states;
}

function addCity(city, state) {
    states = {...states, [state]: [...states[state], city]};
    return states;
}
function addCities(cities, state) {
    states = {...states, [state]:[...states[state], ...cities]};
    return states;
}
