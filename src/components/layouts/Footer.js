import React from 'react'
import { Row, Col } from "reactstrap";

import insta0 from "../../assets/img/adv-aseets/insta/li-0.png"
import insta1 from "../../assets/img/adv-aseets/insta/li-1.png"
import insta2 from "../../assets/img/adv-aseets/insta/li-2.png"
import insta3 from "../../assets/img/adv-aseets/insta/li-3.png"
import insta4 from "../../assets/img/adv-aseets/insta/li-4.png"
import insta5 from "../../assets/img/adv-aseets/insta/li-5.png"

import adres from "../../assets/img/adv-aseets/icons/icon-1.png";
import eposta from "../../assets/img/adv-aseets/icons/icon-2.png";
import telefon from "../../assets/img/adv-aseets/icons/icon-3.png";


const Footer = () => {
  return (
    <footer>
        <Row className='bg-mine-shaft text-merino justify-content-center family-barlow'>
            <Col xs="3" className='py-5'>
                <Row className='pb-4'>
                    <Col xs="12">
                        <h2 className='fw-bold'>Teknolojik<br/>Yemekler</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs="1">
                        <img src={adres} alt="" />
                    </Col>
                    <Col>
                        <p>341 Londonderry Road,<br/>İstanbul Türkiye</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="1">
                        <img src={eposta} alt="" />
                    </Col>
                    <Col>
                        <p>aciktim@teknolojikyemekler.com</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="1">
                        <img src={telefon} alt="" />
                    </Col>
                    <Col>
                        <p>+90 216 123 45 67</p>
                    </Col>
                </Row>
            </Col>
            <Col xs="3" className='py-5 text-center'>
                <Row className='pb-4'>
                    <Col xs="12">
                        <h4 className='fw-bold'>Sıccacık Menüler</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Terminal Pizza</p>
                        <p>5 Kişilik Hackathlon Pizza</p>
                        <p>useEffect Tavuklu Pizza</p>
                        <p>Beyaz Console Frosty</p>
                        <p>Testler Geçti Mutlu Burger</p>
                        <p>Position Absolute Acı Burger</p>
                    </Col>
                </Row>
            </Col>
            <Col xs="3" className='py-5 text-center'>
                <Row className='pb-4'>
                    <Col xs="12">
                        <h4 className='fw-bold'>Instagram</h4>
                    </Col>
                </Row>
                <Row className='m-0 p-0'>
                    <Col xs="12">
                        <Row className="justify-content-center">
                            <Col xs="3" className='p-2'>
                                <img src={insta0} alt="" />
                            </Col>
                            <Col xs="3" className='p-2'>
                                <img src={insta1} alt="" />
                            </Col>
                            <Col xs="3" className='p-2'>
                                <img src={insta2} alt="" />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12">
                        <Row className="justify-content-center">
                            <Col xs="3" className='p-2'>
                                <img src={insta3} alt="" />
                            </Col>
                            <Col xs="3" className='p-2'>
                                <img src={insta4} alt="" />
                            </Col>
                            <Col xs="3" className='p-2'>
                                <img src={insta5} alt="" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
        
    </footer>
  )
}

export default Footer