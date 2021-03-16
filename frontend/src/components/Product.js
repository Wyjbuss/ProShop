import React from 'react'
import { Link } from 'react-router-dom'
import {Card,Button} from 'react-bootstrap'
import Rating from './Rating'

function Product(props) {
    return (
        <>
<Card className=""style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{props.brand}</Card.Subtitle>
    <Card.Text>
    <h2>${props.price}</h2>
    <Rating value={props.rating} text={props.numReviews} />
    
    </Card.Text>
    <Link to={`/product/${props._id}`}>
    <Button variant="primary">Go somewhere</Button>
    </Link>
  </Card.Body>
</Card> 
        </>
    )
}

export default Product
