import React, { Component } from 'react';
import Navbar from "../common/navbar";
import LeftPannel from "./leftPannel";
import RightPannel from './rightPannel';
class UsrProfile extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar/>
                <LeftPannel/>
                <RightPannel/>
            </div>
         );
    }
}
 
export default UsrProfile;