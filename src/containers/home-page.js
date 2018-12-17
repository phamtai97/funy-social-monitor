import HomePage from '../components/home-page';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {homePageAction} from '../actions/homePageAction';

const mapStateToProps = (state) => ({
    listLastestBlocks: state.homePageReducer.listLastestBlocks,
    newBlock: state.homePageReducer.newBlock
})

const mapDispatchToProps = (dispatch) => ({
    actionSetListLastestBlocks: (payload) => dispatch(homePageAction.actionSetListLastestBlocks(payload)),
    actionAddNewBlock: (payload) => dispatch(homePageAction.actionAddNewBlock(payload))
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(HomePage)
