import {nodesPageConstant} from '../constants/nodesPageConstant';
const initalState = {
    listNodes: [],
}

export default function homePageReducer(state=initalState, actions){
    switch(actions.type){
        case nodesPageConstant.SET_LIST_NODES:
            return {
                ...state,
                listNodes: state.listNodes.concat(actions.payload.listNodes)
            };
        default:
            return state;
    }
}
