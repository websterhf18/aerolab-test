import React, { Component, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import ProductItem from './ProductItem';
import useProducts from '../hooks/useProducts';

export default function Products(){
    useProducts();
    return (
        <>
            <Row>
                <ProductItem />
            </Row>
        </>
    )
}