import {combineReducers, createStore} from 'redux'

const initialState={
    balance:0,
    fullName:"",
    mobile:null
};
function acountReducer(state=initialState,action){
    switch(action.type){
        case "deposit":
            return {...state,balance:state.balance+ + action.payload};
        case "withdraw":
            return {...state,balance:state.balance- +action.payload};
       
        case "nameUpdate":
            return {...state,fullName:action.payload}

        case "mobileUpdate":
                return {...state,mobile:action.payload};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function transactionReducer(state=[],action){
    switch(action.type){
        case "ADD_TRANSACTION":
            return [...state,
                {id:action.payload.id,amount:action.payload.amount ,type:action.payload.type, date:action.payload.date}]
        default: return state
        }
}

let rootReducer=combineReducers({
    acount:acountReducer,
    transaction:transactionReducer
})

const store=createStore(rootReducer)
// console.log(store.getState())

// store.dispatch({type:'deposit',payload:1000})
// console.log(store.getState())

// store.dispatch(({type:'withdraw',payload:5}))
// console.log(store.getState())

// store.dispatch(({type:'mobileUpdate',payload:"7569707572"}))
// console.log(store.getState())

// store.dispatch(({type:'nameUpdate',payload:"Rani"}))
// console.log(store.getState())

export default store