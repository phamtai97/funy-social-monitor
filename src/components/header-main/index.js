import React, {Component} from 'react';
import './header-main.css';
// import ItemHeader from './item-header-main';
import {withRouter} from "react-router-dom";
var classNames = require('classnames');

class HeaderMain extends Component {
    handleClickHomeBtn = () => {
        var payload = {
            item: 'home'
        }
        this.props.actionSetItemHeaderClicked(payload);
        this.props.history.push('/');
    }
    handleClickBlocksBtn = () => {
        var payload = {
            item: 'blocks'
        }
        this.props.actionSetItemHeaderClicked(payload);
        this.props.history.push('/blocks');
    }
    handleClickNodesBtn = () => {
        var payload = {
            item: 'nodes'
        }
        this.props.actionSetItemHeaderClicked(payload);
        this.props.history.push('/nodes');
    }
    handleClickAboutBtn = () => {
        var payload = {
            item: 'about'
        }
        this.props.actionSetItemHeaderClicked(payload);
        this.props.history.push('/about');
    }

    render(){
        console.log(this.props.item);
        const item = this.props.item;
        return(
            <div className = "container-header-main">
                <div className="wrapper-header-main">
                    <div className="item-header">
                        <div className={classNames("item-container", {'item-container-selected': item === 'home'})} onClick={this.handleClickHomeBtn}>
                            <div className="content">Home</div>
                        </div>
                        <div className={classNames("item-container", {'item-container-selected': item === 'blocks'})} onClick={this.handleClickBlocksBtn}>
                            <div className="content">Blocks</div>
                        </div>
                        <div className={classNames("item-container", {'item-container-selected': item === 'nodes'})} onClick={this.handleClickNodesBtn}>
                            <div className="content">Nodes</div>
                        </div>
                        <div className={classNames("item-container", {'item-container-selected': item === 'about'})} onClick={this.handleClickAboutBtn}>
                            <div className="content">About</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(HeaderMain);
