import React from 'react'
import {Row, Col} from "reactstrap";
import logo from "../../assets/img/logo.svg";

const Header = () => {
  return (
    <header>
        <Row className='justify-content-center py-5'>
            <Col xs="auto">
                <img src={logo} alt="Teknolojik Yemekler"/>
            </Col>
        </Row>
    </header>
  )
}

export default Header