export default function courseReducers(state=[],action){
    switch(action.type){
        case "CREATE_COURSE":
            return[...state,Object.assign({},action.course)];
        //case "CREATE_COURSE":
           // return    
            default:
                return state;
             
    }
}