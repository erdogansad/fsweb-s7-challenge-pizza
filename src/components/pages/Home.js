import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Button, Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

import homeSectionBackground from "../../assets/img/mvp-banner.png";
import ramenImg from "../../assets/img/adv-aseets/icons/1.svg";
import pizzaImg from "../../assets/img/adv-aseets/icons/2.svg";
import burgerImg from "../../assets/img/adv-aseets/icons/3.svg";
import friesImg from "../../assets/img/adv-aseets/icons/4.svg";
import fastFoodImg from "../../assets/img/adv-aseets/icons/5.svg";
import softDrinksImg from "../../assets/img/adv-aseets/icons/6.svg";

import cardOneImg from "../../assets/img/adv-aseets/kart-1.png";
import cardTwoImg from "../../assets/img/adv-aseets/kart-2.png";
import cardThreeImg from "../../assets/img/adv-aseets/kart-3.png";

import foodOne from "../../assets/img/adv-aseets/food-1.png";
import foodTwo from "../../assets/img/adv-aseets/food-2.png";
import foodThree from "../../assets/img/adv-aseets/food-3.png";



const HomeSectionStyle = {
    background: `url(${homeSectionBackground}) no-repeat bottom center`,
    backgroundSize: "100% auto"
}

const Home = () => {
  return (
    <>
        <Row className="vh-100" style={HomeSectionStyle}>
            <Col>
                <Row>
                    <Col>
                        <Header/>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col xs="auto" className='text-center'>
                        <h4 className='family-satify text-lightning-yellow p-0 m-0'>fırsatı kaçırma</h4>
                        <h1 className='family-barlow text-merino p-0 m-0 fw-ligh fs-0'>KOD ACIKTIRIR,<br/>PİZZA DOYURUR</h1>
                        <Link className="mt-3 rounded-pill px-5 py-2 bg-lightning-yellow border border-0 text-mine-shaft fw-bold btn btn-secondary" to="/pizza">ACIKTIM</Link>
                    </Col>
                </Row>
                
            </Col>
        </Row>
        <Row className='justify-content-center'>
            <Col xs="8">
                <Row className='py-4'>
                    <Col>
                        <img className='pe-3' src={ramenImg} alt="Ramen" />
                        <span className='family-barlow fw-bold'>Ramen</span>
                    </Col>
                    <Col>
                        <img className='pe-3' src={pizzaImg} alt="Pizza" />
                        <span className='family-barlow fw-bold'>Pizza</span>
                    </Col>
                    <Col>
                        <img className='pe-3' src={burgerImg} alt="Burger" />
                        <span className='family-barlow fw-bold'>Burger</span>
                    </Col>
                    <Col>
                        <img className='pe-3' src={friesImg} alt="Kızartma" />
                        <span className='family-barlow fw-bold'>Kızartma</span>
                    </Col>
                    <Col>
                        <img className='pe-3' src={fastFoodImg} alt="Fast Food" />
                        <span className='family-barlow fw-bold'>Fast Food</span>
                    </Col>
                    <Col>
                        <img className='pe-3' src={softDrinksImg} alt="Gazlı İçecek" />
                        <span className='family-barlow fw-bold'>Gazlı İçecek</span>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row className='justify-content-center py-5 bg-merino'>
            <Col xs="7">
                <Row>
                    <Col xs="6">
                        <Card inverse>
                            <CardImg alt="Card image cap" src={cardOneImg} width="auto"/>
                            <CardImgOverlay className='py-5 px-5'>
                                <CardTitle tag="h2" className='fs-0 family-quattrocento fw-bold'>Özel<br/>Lezzetus</CardTitle>
                                <CardText>
                                    Position: Absolute Acı Burger
                                </CardText>
                                <Button className='border-0 rounded-pill fs-7 px-4 py-2 bg-white text-persian-red fw-bold family-barlow'>SİPARİŞ VER</Button>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                    <Col xs="6">
                        <Row className='pb-3'>
                            <Col>
                                <Card inverse>
                                    <CardImg alt="Card image cap" src={cardTwoImg} width="auto"/>
                                    <CardImgOverlay className='px-5 py-5'>
                                        <CardTitle tag="h4" className='pb-4 fw-bold family-barlow'>Hackathlon<br/>Burger Menü</CardTitle>
                                        <Button className='border-0 rounded-pill fs-7 px-4 py-2 bg-white text-persian-red fw-bold family-barlow'>SİPARİŞ VER</Button>
                                    </CardImgOverlay>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card inverse>
                                    <CardImg alt="Card image cap" src={cardThreeImg} width="auto"/>
                                    <CardImgOverlay className='px-5 py-5'>
                                        <CardTitle tag="h4" className='pb-4 text-mine-shaft fw-bold family-barlow'><span className='text-persian-red'>Çoooook hızlı</span><br/>npm gibi kurye</CardTitle>
                                        <Button className='border-0 rounded-pill fs-7 px-4 py-2 bg-white text-persian-red fw-bold family-barlow'>SİPARİŞ VER</Button>
                                    </CardImgOverlay>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='pt-5'>
                    <Col xs="12" className='text-center'>
                        <p className='family-satify fs-2 p-0 m-0 text-persian-red'>en çok paketlenen menüler</p>
                        <p className='family-barlow fw-bold fs-1'>Acıktıran Kodlara Doyuran Lezzetler</p>
                    </Col>
                </Row>
                <Row className='py-2'>
                    <Col>
                        <Row>
                            <Col className='bg-white rounded-pill px-2 py-3 text-center mx-2'>
                                <img className='pe-3' src={ramenImg} alt="Ramen" />
                                <span className='family-barlow fw-bold'>Ramen</span>
                            </Col>
                            <Col className='bg-mine-shaft rounded-pill px-2 py-3 text-center mx-2 text-merino'>
                                <img className='pe-3' src={pizzaImg} alt="Pizza" />
                                <span className='family-barlow fw-bold'>Pizza</span>
                            </Col>
                            <Col className='bg-white rounded-pill px-2 py-3 text-center mx-2'>
                                <img className='pe-3' src={burgerImg} alt="Burger" />
                                <span className='family-barlow fw-bold'>Burger</span>
                            </Col>
                            <Col className='bg-white rounded-pill px-2 py-3 text-center mx-2'>
                                <img className='pe-3' src={friesImg} alt="Kızartma" />
                                <span className='family-barlow fw-bold'>Kızartma</span>
                            </Col>
                            <Col className='bg-white rounded-pill px-2 py-3 text-center mx-2'>
                                <img className='pe-3' src={fastFoodImg} alt="Fast Food" />
                                <span className='family-barlow fw-bold'>Fast Food</span>
                            </Col>
                            <Col className='bg-white rounded-pill px-2 py-3 text-center mx-2'>
                                <img className='pe-3' src={softDrinksImg} alt="Gazlı İçecek" />
                                <span className='family-barlow fw-bold'>Gazlı İçecek</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col xs="4">
                        <Card className='border-0'>
                            <div className='text-center my-3'><CardImg alt="Card image cap" className='w-75' src={foodOne} width="100%"/></div>
                            <div className='p-3'>
                                <CardTitle tag="h5">Terminal Pizza</CardTitle>
                                <CardText className='d-flex justify-content-between align-items-center family-barlow'>
                                    <span className='fw-bold text-muted fs-7'>4.9</span>
                                    <span className='fw-bold text-muted fs-7'>(200)</span>
                                    <span className='fw-bold fs-5'>60₺</span>
                                </CardText>
                            </div>
                        </Card>
                    </Col>
                    <Col xs="4">
                        <Card className='border-0'>
                            <div className='text-center my-3'><CardImg alt="Card image cap" className='w-75' src={foodTwo} width="100%"/></div>
                            <div className='p-3'>
                                <CardTitle tag="h5">Terminal Pizza</CardTitle>
                                <CardText className='d-flex justify-content-between align-items-center family-barlow'>
                                    <span className='fw-bold text-muted fs-7'>4.9</span>
                                    <span className='fw-bold text-muted fs-7'>(928)</span>
                                    <span className='fw-bold fs-5'>85₺</span>
                                </CardText>
                            </div>
                        </Card>
                    </Col>
                    <Col xs="4">
                        <Card className='border-0'>
                            <div className='text-center my-3'><CardImg alt="Card image cap" className='w-75' src={foodThree} width="100%"/></div>
                            <div className='p-3'>
                                <CardTitle tag="h5">Terminal Pizza</CardTitle>
                                <CardText className='d-flex justify-content-between align-items-center family-barlow'>
                                    <span className='fw-bold text-muted fs-7'>4.9</span>
                                    <span className='fw-bold text-muted fs-7'>(462)</span>
                                    <span className='fw-bold fs-5'>75₺</span>
                                </CardText>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col>
                <Footer/>
            </Col>
        </Row>
    </>
  )
}

export default Home