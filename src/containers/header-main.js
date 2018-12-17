import HeaderMain from '../components/header-main';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {headerMainAction} from '../actions/headerMainAction';

const mapStateToProps = (state) => ({
    item: state.headerMainReducer.item,
})

const mapDispatchToProps = (dispatch) => ({
    actionSetItemHeaderClicked: (payload) => dispatch(headerMainAction.actionSetItemHeaderClicked(payload)),
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(HeaderMain)
