import React, {Component} from 'react';
import Node from './node';
import './nodes-page.css'

class NodesPage extends Component {
    render(){
        let a = Array(10).fill(0);
        let cnt = 0;
        return(
            <div className="container-nodes">
                <div className="wrapper-nodes">
                    {
                        a.map(()=> {
                            cnt++;
                            return <Node key={cnt}></Node>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default NodesPage;
