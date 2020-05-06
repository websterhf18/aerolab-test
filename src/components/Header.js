import React, { Component } from 'react'
import { Navbar, Container } from 'react-bootstrap';
import aerolab from '../assets/aerolab_hd.svg';
import money from '../assets/money.svg';
import useUser from '../hooks/useUser';
import { useSelector } from "react-redux";

export default function Header(){
    useUser();
    const username = useSelector(state => state.aerolab.userName); 
    const points = useSelector(state => state.aerolab.userPoints); 
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="#">
                    <img
                        alt=""
                        src={aerolab}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {username}
                        <span className="pill-coins">
                        {points} 
                        <img
                            alt=""
                            src={money}
                            width="20"
                            height="20"
                            className="img-coin"
                            />
                        </span>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}