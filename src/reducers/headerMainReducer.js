import {headerConstant} from '../constants/headerConstant'

const initalState = {
    item: ''
}

export default function headerMainReducer (state=initalState, actions){
    switch(actions.type){
        case headerConstant.SET_ITEM_HEADER_CLIKED:
            return{
                ...state,
                item: actions.payload.item
            };
        default:
            return state;
    }
}
