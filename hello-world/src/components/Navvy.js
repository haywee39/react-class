import React, {Component} from 'react'
import './Navvy.css'

export class Navvy extends Component{
    render() {
        return(
            <div>
                <strong className='assignment'>Getting Ready To Build A Navbar Below:</strong>

                <div className='navbar-container'>
                    <div className='logo'>
                        <strong>Navbar-Logo</strong>
                    </div>
                    <div className='navbar-list'>
                        <ul className='list'>
                            <li><a href="#Home">Home</a></li>
                            <li><a href="#About Us">About Us</a></li>
                            <li><a href="#Gallery">Gallery</a></li>
                            
                        </ul>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Navvy;