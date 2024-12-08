- UseReducer:
        -- It creates a store of states at one place,
        -- state logic , component logic
        -- export const reducer = () = {}
- useReducers : 
        -- function reducer(state, payload){
            switch(type){
                case "SomeCase": 
                    return{
                        ...state, [payload]:state[payload]+1
                    }
                default:
                    return state
            }
        }
        -- let initstate={a:1, b:2, c:3}
        -- let [state, dispatch] useReducers(reducer, initstate)

        -- dispatch({type:"inc", "c"}) => button => C


// REDUX => Global state management => single source of truth => cannon of global state management

// ContextAPI => Global state management => gun of global state management

