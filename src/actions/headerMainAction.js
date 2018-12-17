import {headerConstant} from '../constants/headerConstant';

const actionSetItemHeaderClicked = (payload) => ({
    type: headerConstant.SET_ITEM_HEADER_CLIKED,
    payload:{
        item: payload.item
    }
})

export const headerMainAction = {
    actionSetItemHeaderClicked
}
