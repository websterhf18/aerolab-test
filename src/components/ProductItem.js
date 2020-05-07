import React from 'react'
import classNames from 'classnames'
import { Card, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import money from '../assets/money.svg';
import carticon from '../assets/Icon.svg';
import carticonActive from '../assets/IconActive.svg';

import appActions from "../store/appActions";

export default function ProductItem(){
    const dispatch = useDispatch();
    const products = useSelector(state => state.aerolab.products);
    const points = useSelector(state => state.aerolab.userPoints);
    const idOverlay = useSelector(state => state.aerolab.idOverlay);
    const conditionalBTN = (product) => {
        if(product.cost > points){
            var pointsRequired = product.cost - points;
            return (
                <Card.Header>
                    <span className="pill-coins-prod">
                    You need {pointsRequired} 
                    <img
                    alt=""
                    src={money}
                    width="20"
                    height="20"
                    className="img-coin"
                    />
                    </span>    
                </Card.Header> 
            );
        }else{
            return (
                <Card.Header>
                    <span 
                    onClick={() => dispatch(appActions.setOverlay(product._id))}
                    className="pill-cart">
                        <img
                        alt=""
                        src={idOverlay === product._id ? carticonActive : carticon}
                        width="42"
                        height="42"
                        className="img-coin onaction-mouse"
                        />
                    </span>
                </Card.Header> 
            );
        }
    };
    const redeemProduct = (product) => {
        dispatch(appActions.setRedeemPoints(product.cost))
    }
    const conditionalOverlay = (product) => {
        var liClasses = classNames({
            'product-overlay': true,
            'active': idOverlay === product._id
        });
        if(product.cost < points){
            return (
                <div className={liClasses}>
                    <div className="product-overlay-content">
                        <div className="product-text-overlay">
                            {product.cost}
                            <img
                            alt=""
                            src={money}
                            width="20"
                            height="20"
                            className="img-coin"
                            />
                        </div>
                        <Button
                        onClick={() => redeemProduct(product)}
                        className="product-button">Redeem now</Button>
                    </div>
                </div>
            );
        }
    };
    if(products == 0){
        return (
            <div>
                <p>Cargando...</p>
            </div>
        );
    }else{
        const productItems = products.map((product, index) =>
            <Col key={index}>
                <Card
                className="product-block" 
                style={{ width: '250px' }}>
                    {conditionalBTN(product)}
                    <Card.Img variant="top" src={product.img.url} />
                    <Card.Body>
                        <hr></hr>
                        <Card.Title>{product.category}</Card.Title>
                        <Card.Text>{product.name}</Card.Text>
                    </Card.Body>
                    {conditionalOverlay(product)}
                </Card> 
            </Col>
        );
        return (
            <>
                {productItems}  
            </>
        )
    }
}

