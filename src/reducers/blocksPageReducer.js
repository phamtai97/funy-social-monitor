import {blocksPageConstant} from '../constants/blocksPageConstant';
const initalState = {
    listBlocks: [],
    newBlock: {},
}

export default function blocksPageReducer(state=initalState, actions){
    switch(actions.type){
        case blocksPageConstant.SET_LIST_BLOCKS:
            return {
                ...state,
                listBlocks: state.listBlocks.concat(actions.payload.listBlocks)
            };
        case blocksPageConstant.ADD_NEW_BLOCK:
            return {
                ...state,
                listBlocks: (state.listBlocks.reverse().concat(actions.payload.newBlock)).reverse()
            }
        default:
            return state;
    }
}
