import NodesPage from '../components/nodes-page';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {nodesPageAction} from '../actions/nodesPageAction';

const mapStateToProps = (state) => ({
    listNodes: state.nodesPageReducer.listNodes,
})

const mapDispatchToProps = (dispatch) => ({
    actionSetLists: (payload) => dispatch(nodesPageAction.actionSetLists(payload)),
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(NodesPage)
