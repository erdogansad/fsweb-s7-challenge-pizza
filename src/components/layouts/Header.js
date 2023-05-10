import React from 'react'
import { Link } from "react-router-dom";
import {Row, Col} from "reactstrap";
import logo from "../../assets/img/logo.svg";

const Header = () => {
  return (
    <header>
        <Row className='justify-content-center py-5'>
            <Col xs="auto">
                <Link to="/"><img src={logo} alt="Teknolojik Yemekler"/></Link>
            </Col>
        </Row>
    </header>
  )
}

export default Header