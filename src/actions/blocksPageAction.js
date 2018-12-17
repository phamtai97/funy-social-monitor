import {blocksPageConstant} from '../constants/blocksPageConstant'

const actionSetListBlocks = (payload) => ({
    type: blocksPageConstant.SET_LIST_BLOCKS,
    payload: {
        listBlocks: payload.listBlocks
    }
})

const actionAddNewBlock = (payload) => ({
    type: blocksPageConstant.ADD_NEW_BLOCK,
    payload: {
        newBlock: payload.newBlock
    }
})
export const blocksPageAction = {
    actionSetListBlocks,
    actionAddNewBlock
}
