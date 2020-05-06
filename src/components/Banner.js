import React, { Component } from 'react'
import header from '../assets/header.png';
import { Image } from 'react-bootstrap';

export class Banner extends Component {
    render() {
        return (
            <Image 
            src={header}
            fluid />
        )
    }
}

export default Banner
