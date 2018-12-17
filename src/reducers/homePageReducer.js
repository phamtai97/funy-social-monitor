import {homePageConstant} from '../constants/homePageConstant';
const initalState = {
    listLastestBlocks: [],
    newBlock: {},
}

export default function homePageReducer(state=initalState, actions){
    switch(actions.type){
        case homePageConstant.SET_LIST_LASTEST_BLOCKS:
            return {
                ...state,
                listLastestBlocks: state.listLastestBlocks.concat(actions.payload.listLastestBlocks)
            };
        case homePageConstant.ADD_NEW_BLOCK:
            return {
                ...state,
                listLastestBlocks: (state.listLastestBlocks.reverse().concat(actions.payload.newBlock)).reverse()
            }
        default:
            return state;
    }
}
