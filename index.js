const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore; // this creates store for our states
const combineReducer = redux.combineReducers; //this is used to combine different reducers so that create store call the one containing all reduceres
const applyMiddleWare = redux.applyMiddleware; //help us to apply middle ware
const logger = reduxLogger.createLogger(); // this is the middle ware we are going to use.

const BUY_CAKE = "BUY_CAKE";

const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "first multiple reducer",
  };
}
const initialCakeState = {
  numberOfCakes: 10,
};

const initialIceCreamState = {
  numberOfIceCream: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };
    default:
      return state;
  }
};
//combine the reducers
const rootReducer = combineReducer({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleWare(logger));
console.log("initial state:", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
