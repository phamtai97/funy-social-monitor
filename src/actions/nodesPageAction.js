import {nodesPageConstant} from '../constants/nodesPageConstant'

const actionSetLists = (payload) => ({
    type: nodesPageConstant.SET_LIST_NODES,
    payload: {
        listNodes: payload.listNodes
    }
})

export const nodesPageAction = {
    actionSetLists,
}
