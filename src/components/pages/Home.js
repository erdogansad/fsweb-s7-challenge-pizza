import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Button, Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";

import Header from "../layouts/Header";
import CategoryButtons from '../layouts/CategoryButtons';
import Footer from "../layouts/Footer";
import FoodCard from '../layouts/FoodCard';

import { categories, foods } from '../../utils/MockData';
import { homeSectionBackground, cardOneImg, cardTwoImg, cardThreeImg } from "../../utils/Images";


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
                        <h3 className='family-satify text-lightning-yellow p-0 m-0'>fırsatı kaçırma</h3>
                        <h1 className='family-barlow text-merino p-0 m-0 fw-ligh fs-0'>KOD ACIKTIRIR,<br/>PİZZA DOYURUR</h1>
                        <Link id="order-pizza" className="mt-3 rounded-pill px-5 py-2 bg-lightning-yellow border border-0 text-mine-shaft fw-bold btn btn-primary" to="/pizza">ACIKTIM</Link>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row className='justify-content-center'>
            <Col xs="8">
                <Row className='py-4'>
                    { categories.map((cat, i) => <CategoryButtons key={i} cat={cat}/>) }
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
                                <Card className='border-0' inverse>
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
                                <Card className='border-0' inverse>
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
                <Row className='pt-5 mt-5'>
                    <Col xs="12" className='text-center'>
                        <p className='family-satify fs-2 p-0 m-0 text-persian-red'>en çok paketlenen menüler</p>
                        <p className='family-barlow fw-bold fs-1'>Acıktıran Kodlara Doyuran Lezzetler</p>
                    </Col>
                </Row>
                <Row className='py-2'>
                    <Col>
                        <Row>
                            { categories.map((cat, i) => <CategoryButtons  key={i} className={`${cat.selected ? "bg-mine-shaft text-merino" : "bg-white" } rounded-pill px-2 py-3 text-center mx-2`} cat={cat} />) }
                        </Row>
                    </Col>
                </Row>
                <Row className='my-5'>
                    { foods.map((food,i) => <FoodCard key={i} food={food}/>) }
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