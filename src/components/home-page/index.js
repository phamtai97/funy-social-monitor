import React, {Component} from 'react';
import Block from '../blocks-page/block';
import './home-page.css';

class HomePage extends Component {
    render(){
        let a = Array(10).fill(0);
        let cnt = 0;
        return(
            <div className="container-home-page">
            <div className="wrapper-home-page">
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

export default HomePage;
