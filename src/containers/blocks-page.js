import BlocksPage from '../components/blocks-page';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {blocksPageAction} from '../actions/blocksPageAction';

const mapStateToProps = (state) => ({
    listBlocks: state.blocksPageReducer.listBlocks,
    newBlock: state.blocksPageReducer.newBlock
})

const mapDispatchToProps = (dispatch) => ({
    actionSetListBlocks: (payload) => dispatch(blocksPageAction.actionSetListBlocks(payload)),
    actionAddNewBlock: (payload) => dispatch(blocksPageAction.actionAddNewBlock(payload))
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(BlocksPage)
