import React from 'react'
import {Card,Button} from 'react-bootstrap'

function Product(props) {
    return (
        <>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{props.brand}</Card.Subtitle>
    <Card.Text>
    {props.rating} from {props.numReviews} reviews
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> 
        </>
    )
}

export default Product
