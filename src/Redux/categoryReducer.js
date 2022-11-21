const initialState = {
    categories: [],
}

export function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case "GET-CATEGORY-HOMES": {
            return { 
                ...state,rentHomes : action.payload
            }
        }
        default: {
            return state
        }
    }
  
}
