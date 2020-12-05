import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Selector = () => (
    <div className="Selectors">
        <ListGroup variant="flush">
            <h1 class="page-title">Jupes</h1>
            <ListGroupItem action href='#'>
                Shop Men
            </ListGroupItem>
            <ListGroupItem action href='#'>
                Shop Women
            </ListGroupItem>
            <ListGroupItem action href='#'>
                Shop Clothing
            </ListGroupItem>
            <ListGroupItem action href='#'>
                Shop Accessories
            </ListGroupItem>
        </ListGroup>
    </div>
)

export default Selector;