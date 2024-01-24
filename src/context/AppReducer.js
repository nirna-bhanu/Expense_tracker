export default (state, action) =>{
    switch(action.type){
            case 'DELETE_TRAMSACTION':
                return{
                    ...state,
                    transactions: state.transactions.filter(transaction =>transaction.id !==
                    action.payload)
                }


                case 'ADD_TRAMSACTION':
                    return{
                        ...state,
                        transactions:[action.payload, ...state.transactions]
                    }
                default:
            return state;
            
    }
}