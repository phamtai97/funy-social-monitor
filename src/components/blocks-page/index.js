import React, {Component} from 'react';
import Block from './block';
import './blocks-page.css';

class BlocksPage extends Component {

    render(){
        let a = Array(10).fill(0);
        let cnt = 0;

        return(
            <div className="container-blocks">
                <div className="wrapper-blocks">
                    {
                        a.map(()=> {
                            cnt++;
                            return <Block key={cnt}></Block>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default BlocksPage;
