import React from 'react'
import {Row,Col} from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'


function HomeScreen() {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product)=>(
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Product 
                        key={product._id}
                        _id={product._id}
                        name={product.name}
                        img={product.image}
                        description={product.description}
                        numReviews={product.numReviews}
                        rating={product.rating}
                        brand={product.brand}
                        price={product.price}

                        />
                    </Col>
                )
                )}
            </Row>
        </>
    )
}

export default HomeScreen
