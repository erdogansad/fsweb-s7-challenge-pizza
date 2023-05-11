import React from 'react'
import { Col, Card, CardTitle, CardImg, CardText } from "reactstrap";

const FoodCard = ({food}) => {
  return (
    <Col xs="4">
        <Card className='border-0'>
            <div className='text-center my-3'><CardImg alt="Card image cap" className='w-75' src={food.img} width="100%"/></div>
            <div className='p-3'>
                <CardTitle tag="h5">{food.name}</CardTitle>
                <CardText className='d-flex justify-content-between align-items-center family-barlow'>
                    <span className='fw-bold text-muted fs-7'>{food.review.score}</span>
                    <span className='fw-bold text-muted fs-7'>({food.review.count})</span>
                    <span className='fw-bold fs-5'>{food.price}₺</span>
                </CardText>
            </div>
        </Card>
    </Col>
  )
}

export default FoodCard