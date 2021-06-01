import React, { Component } from 'react';
import Header from './HeaderComponent';
import Hero from './Hero/index';
import Info from './Info/index';
import { homeObjOne, homeObjTwo, homeObjThree} from './Info/Data';
import Services from './Services/index';
class Home extends Component {
    constructor(props) {
        super (props);
    
      }

    render() {
        return(
            <div>
                <Header clients={this.props.clients}/>
                    <div>
                        <Hero />
                        <Info {...homeObjOne}/>
                        <Info {...homeObjTwo}/>
                        <Services />
                        <Info {...homeObjThree}/>   
                    </div>
            </div>
        );
    }
}

export default Home;