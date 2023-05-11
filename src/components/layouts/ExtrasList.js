import React from 'react'
import { Row } from "reactstrap";
import ExtraSingle from './ExtraSingle';

const ExtrasList = ({rowsCount, pizzaExtras, handleChange, checkLimit}) => {
  return (
    <>
    {
        Array(rowsCount).fill().map((_, rowIdx) => (
            <Row key={rowIdx} className='py-2'>
                { pizzaExtras.slice(rowIdx * 3, (rowIdx * 3) + 3).map((extra, extraId) => <ExtraSingle key={extraId} extra={extra} handleChange={handleChange} checkLimit={checkLimit}/>) }
            </Row>
        ))
    }
    </>
  )
}

export default ExtrasList