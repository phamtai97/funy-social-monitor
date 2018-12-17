import {homePageConstant} from '../constants/homePageConstant'

const actionSetListLastestBlocks = (payload) => ({
    type: homePageConstant.SET_LIST_LASTED_BLOCKS,
    payload: {
        listLastestBlocks: payload.listLastestBlocks
    }
})

const actionAddNewBlock = (payload) => ({
    type: homePageConstant.ADD_NEW_BLOCK,
    payload: {
        newBlock: payload.newBlock
    }
})
export const homePageAction = {
    actionSetListLastestBlocks,
    actionAddNewBlock
}
