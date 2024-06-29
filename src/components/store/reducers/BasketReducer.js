const initialState = {
    basket: [],
    state: false,
    modal: false
}

export const BasketReducer = (state=initialState,action)=>{
    console.log(action);
    if(action.type==="ADD"){
        const find = state.basket.find((el) => {
            return el.id === action.payload.id;
        });

        if (find) {
            return state
        }
        return {
            ...state,
            basket: [...state.basket, action.payload]
        }
    }
    if(action.type==="SHOW"){
        return {
            ...state,
            state: true
        }

    }
    if(action.type==="CLOSE"){
        return {
            ...state,
            state: false
        }
    }
    if(action.type==="PLUS"){
        const plus = state.basket.map((el)=>{
            if(el.id===action.payload){
                console.log("IUD");
                el.amount = el.amount + 1
                return el
            }
            // return el
        })
        return {
            ...state,
            basket: plus,
            modal: true
        }
    }
    if(action.type==="MINUS"){
        console.log("MINUS");
        const minus = state.basket.map((el)=>{
            if(el.id===action.payload){
                console.log("IUD");
                if(el.amount>1){
                    el.amount = el.amount - 1
                    return el
                }
                else{

                }
            }
            return el
            
        })
        return {
            ...state,
            basket: minus
        }
    }
    return state
}