const initialState = {
  count: 0
}

function rootReducer(state=initialState, action) {
  switch(action.type) {
    case "INCREMENT": 
      debugger
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
  })
  $("#increment").on("click", function(){
    store.dispatch({
      type: "DECREMENT"
    })
  })
});