import React from 'react'
import { Col } from "reactstrap";

const CategoryButtons = ({cat, className}) => {
  return (
    <Col className={!!className ? className : ""}>
        <img className='pe-3' src={cat.img} alt={cat.name} />
        <span className='family-barlow fw-bold'>{cat.name}</span>
    </Col>
  )
}

export default CategoryButtons