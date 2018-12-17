import React, {Component} from 'react';
import './block.css';

class Block extends Component {
    handleClickHashNumber = () => {
        alert("hash number")
    }

    render(){
        return (
            <div className="container-block">
                <div className="height-block">
                    <div className="height-name">Height</div>
                    <div className="height-number">1000</div>
                </div>
                <div className="hash-block">
                    <div className="hash-name">Hash</div>
                    <div className="hash-number" onClick={this.handleClickHashNumber}>1000000000000000000000000000900000000000000000000</div>
                </div>
                <div className="time-block">
                    <div className="time-name">Time</div> 
                    <div className="time-number">3 minutes ago</div>
                </div>
                <div className="transactions-block">
                    <div className="transactions-name">Transactions</div>
                    <div className="transactions-number">0</div>
                </div>
            </div>
        )
    }
}

export default Block;
