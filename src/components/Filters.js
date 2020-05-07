import React from 'react'
import classNames from 'classnames'
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import appActions from "../store/appActions";

export default function Filters() {
    const dispatch = useDispatch();
    const filterActive = useSelector(state => state.aerolab.filterActive);
    const products = useSelector(state => state.aerolab.products);
    return (
        <Row className="filters-container">
            <Col className="border-right-0 filters-counter">
                <span>{products.length} of {products.length} products</span>
            </Col>
            <Col xs={9}>
                <span
                className="filters-items"
                >Sort by:</span>
                <a
                onClick={() => dispatch(appActions.setFilter('default'))}
                className={
                    classNames({
                        'btn': true,
                        'filters-items': true,
                        'filters-btn': true,
                        'active': filterActive === 'default'
                    }) 
                }
                >Most Recent</a>
                <a
                onClick={() => dispatch(appActions.setFilter('lowest'))}
                className={
                    classNames({
                        'btn': true,
                        'filters-items': true,
                        'filters-btn': true,
                        'active': filterActive === 'lowest'
                    }) 
                }
                >Lowest Price</a>
                <a 
                onClick={() => dispatch(appActions.setFilter('highest'))}
                className={
                    classNames({
                        'btn': true,
                        'filters-items': true,
                        'filters-btn': true,
                        'active': filterActive === 'highest'
                    }) 
                }
                >Highest Price</a>
            </Col>
        </Row>
    )
}
