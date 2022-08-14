// Select Elements:
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// Action Identifiers:
const INCREMENT = "increment";
const DECREMENT = "decrement";

// Action Creators:
const increment = (value) => {
        return {
                type: INCREMENT,
                payload: value
        }
}
const decrement = (value) => {
        return {
                type: DECREMENT,
                payload: value
        }
}

// Initialize State:
const initialState = {
        value: 0
}

// Create Reducer Function:
function counterReducer(state = initialState, action) {
        if (action.type === INCREMENT) {
                return {
                        ...state,
                        value: state.value + action.payload
                }
        }
        else if (action.type === DECREMENT) {
                return {
                        ...state,
                        value: state.value - action.payload
                }
        }
        else {
                return state;
        }
}

// Create Store:
const store = Redux.createStore(counterReducer);

const render = () => {
        const state = store.getState();
        counterEl.innerText = state.value
}

store.subscribe(render)

// Update UI Initially:
render()

// Add Event Listener:
incrementEl.addEventListener('click', () => {
        store.dispatch(increment(5))
})
decrementEl.addEventListener('click', () => {
        store.dispatch(decrement(3))
})