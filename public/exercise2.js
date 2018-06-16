// EXERCISE s
// The increment button works, but let's hook up the decrement button

let reducer2 = (state = 0, action) => {
	if (action.type == "INCREMENT") {
		return state + 1
	}// need a 'else if' here to handle a DECREMENT action
	return state;
}

let store2 = Redux.createStore(reducer2);

let incrementHTML = document.getElementById('counter2-increment');
// need another variable here that points to 'counter2-decrement'
let counterHTML = document.getElementById('counter2-text');

store2.subscribe(()=>{
	let counterValue = store2.getState();
	counterHTML.innerHTML = counterValue;
})

// we need another button listener here for the decrement button.
// It'll dispatch a different action than this one
incrementHTML.addEventListener('click', (e)=>{
	store2.dispatch({
		type: "INCREMENT"
	})
})