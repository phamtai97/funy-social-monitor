import React, {Component} from 'react';
import './about-page.css'

class AboutPage extends Component{
    render(){
        const content = "Forest Network is a decentralized social network. The network is built on blockchain technology with Proof of Stack consensus.";
        return(
            <div className="container-about-page">
                <div className="wrapper-about-page">
                    <div className="title">This is a monitor block chain of Forest Network</div>
                    <div className="content">{content}</div>
                </div>
            </div>
        )
    }
}

export default AboutPage;
