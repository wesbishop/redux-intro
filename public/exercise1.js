// EXERCISE 1
// This counter isn't working! The counter always says 0 even when you press 'increment'
// This is because the reducer isn't implemented 

let reducer1 = (state = 0, action) => {
	 state += (action.type == "INCREMENT") ? 1 : 0;
	 return state++;
} 

let store1 = Redux.createStore(reducer1);

let buttonHTML = document.getElementById('counter1-button');
let counterHTML1 = document.getElementById('counter1-text');

store1.subscribe(()=>{
  let counterValue = store1.getState();
	counterHTML1.innerHTML = counterValue;
})

buttonHTML.addEventListener('click', (e)=>{
	store1.dispatch({
		type: "INCREMENT"
	})
})