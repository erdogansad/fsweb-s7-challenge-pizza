import React from 'react'
import { Col, Input } from "reactstrap";


const ExtraSingle = ({extra, handleChange, checkLimit}) => {
  return (
    <Col xs="4">
      <Input type="checkbox" className='btn btn-square bg-merino text-scorpion border-0 me-3' onClick={handleChange} name="extras" value={extra.id} disabled={checkLimit(extra.id)}/>
      <span className='family-barlow fw-bold text-scorpion'>{extra.name}</span>
    </Col>
  )
}

export default ExtraSingle