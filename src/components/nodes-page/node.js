import React, {Component} from 'react';
import iconOk from '../../images/icons8-ok-30.png';
import './node.css';

class Node extends Component {
    handleClickUrl = () => {
        alert("url")
    }

    handleClickBlock = () => {
        alert("block")
    }

    render(){
        let a = Array(8).fill(0);
        let cnt = 0;
        return(
            <div className="container-node">
                <div className="url-node">
                    <div className="name">URL</div>
                    <div className="url-value" onClick={this.handleClickUrl}>abc.xyz.com</div>
                </div>
                <div className="verify-node">
                    <div className="name">OK?</div>
                    <div className="verify-value">
                        <img src={iconOk}></img>
                    </div>
                </div>
                <div className="name-node">
                    <div className="name">Name</div>
                    <div className="name-value">dragonfly</div>
                </div>
                <div className="validator-node">
                    <div className="name">Validator?</div>
                    <div className="validator-value">tantai</div>
                </div>
                <div className="block-node">
                    <div className="name">Block</div>
                    <div className="block-value" onClick={this.handleClickBlock}>1000</div>
                </div>
                <div className="latency-node">
                    <div className="name">Latency(ms)</div>
                    <div className="latency-value">69</div>
                </div>
                <div className="peers-node">
                    <div className="name">Peers</div>
                    <div className="peers-value">
                        {
                            a.map(()=> {
                                cnt++;
                                return <div className="peers-name" key={cnt}>minhtri</div>
                            })
                        }
                    </div>
                </div>

            </div>
        )
    }
}

export default Node;
