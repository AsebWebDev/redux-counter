const initialState = {
  count: 0
}

function rootReducer(state=initialState, action) {
  switch(action.type) {
    case "INCREMENT": 
      state.count++;
      return state;
    case "DECREMENT": 
      state.count--;
      return state
    default:
      return state
  }
}

const store = Redux.createStore(rootReducer);

$(document).ready(function () {
  $("#increment").on("click", function(){
    store.dispatch({
      type: "INCREMENT"
    })
    let currentState = store.getState();
    $("#counter").text(currentState.count)
  })
  $("#decrement").on("click", function(){
    store.dispatch({
      type: "DECREMENT"
    })
    let currentState = store.getState();
    $("#counter").text(currentState.count)
  })
});