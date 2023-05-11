import React from 'react'
import { Row, Col } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

import { pizzaSize, pizzaDough, pizzaExtras } from '../../utils/MockData';


import Header from "../layouts/Header";

const Success = () => {
  const { state } = useLocation();

  if(state === undefined) {
    return (<Row className='bg-persian-red h-100 min-vh-100'>
      <Col>
        <Row>
            <Col>
                <Header/>
            </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs="auto" className='text-center border-bottom pb-4'>
              <h3 className='family-satify text-lightning-yellow p-0 m-0'>ufak bir hata</h3>
              <h1 className='family-barlow text-merino p-0 m-0 fw-ligh fs-0 fw-light'>SAYFA BULUNAMADI</h1>
          </Col>
        </Row>
        <Row className='justify-content-center py-5'>
          <Col xs="auto">
            <Link to="/" className="btn btn-secondary text-mine-shaft fw-bold border-0 bg-lightning-yellow px-5 py-2 rounded-pill">Ana Sayfa</Link>
          </Col>
        </Row>
      </Col>
    </Row>)
  }

  return (
    <Row className='bg-persian-red h-100 min-vh-100'>
      <Col>
        <Row>
            <Col>
                <Header/>
            </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs="auto" className='text-center border-bottom pb-4'>
              <h3 className='family-satify text-lightning-yellow p-0 m-0'>lezzetin yolda</h3>
              <h1 className='family-barlow text-merino p-0 m-0 fw-ligh fs-0 fw-light'>SİPARİŞ ALINDI</h1>
          </Col>
        </Row>
        <Row className='justify-content-center py-4'>
          <Col xs="auto">
            <h5 className='text-light'>{state.data.foodData.name}</h5>
          </Col>
        </Row>
        <Row className='justify-content-center py-4 text-light family-barlow'>
          <Col xs="2">
            <p>Boyut: <span className='fw-bold'>{pizzaSize[state.data.order.size]}</span></p>
            <p>Hamur: <span className='fw-bold'>{pizzaDough[state.data.order.dough]}</span></p>
            <p>Ek Malzemeler: <span className='fw-bold'>{state.data.order.extras.reduce((curr, next) => curr+=`${pizzaExtras[next]["name"]}, `,"")}</span></p>
          </Col>
        </Row>
        <Row className='justify-content-center py-4 text-light'>
          <Col xs="2" className='border rounded py-4 px-5'>
            <Row>
              <h5 className='family-barlow fw-bold'>Sipariş Toplamı</h5>
            </Row>
            <Row className='py-2'>
              <Col>
                <h6 className='family-barlow fw-bold'>Seçimler</h6>
              </Col>
              <Col className='text-end'>
                <h6 className='family-barlow fw-bold'>{(state.data.order.extras.length * 5).toFixed(2)}₺</h6>
              </Col>
            </Row>
            <Row className='pb-2'>
              <Col>
                <h6 className='family-barlow fw-bold'>Toplam</h6>
              </Col>
              <Col className='text-end'>
                <h6 className='family-barlow fw-bold'>{((state.data.foodData.price + (state.data.order.extras.length * 5)) * state.data.order.pizzaCount).toFixed(2)}₺</h6>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs="auto">
            <Link to="/" className="btn btn-secondary text-mine-shaft fw-bold border-0 bg-lightning-yellow px-5 py-2 rounded-pill">Ana Sayfa</Link>
          </Col>
        </Row>
      </Col>
    </Row>   
  )
}

export default Success