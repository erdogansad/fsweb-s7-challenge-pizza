import React, { useState } from 'react'
import { Row, Col, Input, Button, InputGroup } from "reactstrap";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import headerImg from "../../assets/img/adv-aseets/adv-form-banner.png"

const PizzaForm = () => {
  const [size, setSize] = useState();
  const [materials, setMaterials] = useState([]);

  const toggleMaterial = (id) => materials.includes(id) ? setMaterials(materials.filter(i => i !== id)) : setMaterials([...materials, id]);

  return (
    <>
      <Row className='bg-persian-red'>
          <Col>
              <Header/>
          </Col>
      </Row>
      <Row className='justify-content-center bg-merino'>
        <Col xs="12">
          <Row className='justify-content-center'>
            <Col xs="4">
              <img src={headerImg} alt=""/>
            </Col>
          </Row>
        </Col>
        <Col xs="4" className='mt-5 pt-5'>
          <Row>
            <Col>
              <p className='family-barlow fw-bold text-scorpion'>
                <span>Anasayfa</span> - <span>Seçenekler</span> - <span className='text-persian-red'>Sipariş Oluştur</span>
              </p>
            </Col>
          </Row>
          <Row className='py-4'>
            <Col>
              <h3 className='family-barlow fw-bold'>Position Absolute Acı Pizza</h3>
            </Col>
          </Row>
          <Row className='py-2'>
            <Col className='d-flex justify-content-between align-items-center family-barlow fw-bold'>
                <span className='fs-4'>85.50₺</span>
                <span className='text-muted fs-7'>4.9</span>
                <span className='text-muted fs-7'>(200)</span>
            </Col>
          </Row>
          <Row className='py-2'>
            <Col className='d-flex justify-content-between align-items-center family-barlow text-scorpion text-justify'>
                <p>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='justify-content-center py-5'>
        <Col xs="4">
          <Row>
            <Col xs="6">
              <Row>
                <Col xs="12">
                  <h5 className='family-barlow fw-bold'>Boyut Seç <span className='text-persian-red'>*</span></h5>
                </Col>
                <Col xs="12" className='family-barlow py-3'>
                    <Button className='rounded-circle fw-bold bg-merino text-scorpion border-0 mx-2 px-4 py-3'  onClick={() => setSize(1)} active={size === 1}>
                      S
                    </Button>
                    <Button className='rounded-circle fw-bold bg-merino text-scorpion border-0 mx-2 px-4 py-3' onClick={() => setSize(2)} active={size === 2}>
                      M
                    </Button>
                    <Button className='rounded-circle fw-bold bg-merino text-scorpion border-0 mx-2 px-4 py-3' onClick={() => setSize(3)} active={size === 3}>
                      L
                    </Button>
                </Col>
              </Row>
            </Col>
            <Col xs="6">
              <Row>
                <Col xs="12">
                  <h5 className='family-barlow fw-bold'>Hamur Seç <span className='text-persian-red'>*</span></h5>
                </Col>
                <Col xs="12" className='family-barlow py-3'>
                  <Input className='p-3 bg-merino border-0 text-scorpion' name="select" type="select" defaultValue="--Hamur Kalınlığı Seç--">
                    <option disabled>--Hamur Kalınlığı Seç--</option>
                    <option>Normal</option>
                    <option>İnce</option>
                  </Input>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className='py-5'>
            <Col xs="12">
              <h5 className='family-barlow fw-bold'>Ek Malzemeler</h5>
            </Col>
            <Col xs="12">
              <p className='text-scorpion family-barlow'>En fazla 10 malzeme seçebilirsiniz. (5₺)</p>
            </Col>
            <Col xs="12">
              <Row className='py-2'>
                <Col xs="4">
                  <Button className='checkbox btn-square bg-merino text-scorpion border-0 me-3' onClick={() => toggleMaterial(0)} active={materials.includes(0)}>
                    {materials.includes(0) && <FontAwesomeIcon icon={faCheck}/>}
                  </Button>
                  <span className='family-barlow fw-bold text-scorpion'>Pepperoni</span>
                </Col>
                <Col xs="4">
                  <Button className='checkbox btn-square bg-merino text-scorpion border-0 me-3' onClick={() => toggleMaterial(1)} active={materials.includes(1)}>
                    {materials.includes(1) && <FontAwesomeIcon icon={faCheck}/>}
                  </Button>
                  <span className='family-barlow fw-bold text-scorpion'>Domates</span>
                </Col>
                <Col xs="4">
                  <Button className='checkbox btn-square bg-merino text-scorpion border-0 me-3' onClick={() => toggleMaterial(2)} active={materials.includes(2)}>
                    {materials.includes(2) && <FontAwesomeIcon icon={faCheck}/>}
                  </Button>
                  <span className='family-barlow fw-bold text-scorpion'>Biber</span>
                </Col>
              </Row>
              <Row className='py-2'>
                <Col xs="4">
                  <Button className='checkbox btn-square bg-merino text-scorpion border-0 me-3' onClick={() => toggleMaterial(3)} active={materials.includes(3)}>
                    {materials.includes(3) && <FontAwesomeIcon icon={faCheck}/>}
                  </Button>
                  <span className='family-barlow fw-bold text-scorpion'>Sosis</span>
                </Col>
                <Col xs="4">
                  <Button className='checkbox btn-square bg-merino text-scorpion border-0 me-3' onClick={() => toggleMaterial(4)} active={materials.includes(4)}>
                    {materials.includes(4) && <FontAwesomeIcon icon={faCheck}/>}
                  </Button>
                  <span className='family-barlow fw-bold text-scorpion'>Mısır</span>
                </Col>
                <Col xs="4">
                  <Button className='checkbox btn-square bg-merino text-scorpion border-0 me-3' onClick={() => toggleMaterial(5)} active={materials.includes(5)}>
                    {materials.includes(5) && <FontAwesomeIcon icon={faCheck}/>}
                  </Button>
                  <span className='family-barlow fw-bold text-scorpion'>Sucuk</span>
                </Col>
              </Row>
              <Row className='py-2'>
                <Col xs="4">
                  <Button className='checkbox btn-square bg-merino text-scorpion border-0 me-3' onClick={() => toggleMaterial(6)} active={materials.includes(6)}>
                    {materials.includes(6) && <FontAwesomeIcon icon={faCheck}/>}
                  </Button>
                  <span className='family-barlow fw-bold text-scorpion'>Kanada Jambonu</span>
                </Col>
                <Col xs="4">
                  <Button className='checkbox btn-square bg-merino text-scorpion border-0 me-3' onClick={() => toggleMaterial(7)} active={materials.includes(7)}>
                    {materials.includes(7) && <FontAwesomeIcon icon={faCheck}/>}
                  </Button>
                  <span className='family-barlow fw-bold text-scorpion'>Ananas</span>
                </Col>
                <Col xs="4">
                  <Button className='checkbox btn-square bg-merino text-scorpion border-0 me-3' onClick={() => toggleMaterial(8)} active={materials.includes(8)}>
                    {materials.includes(8) && <FontAwesomeIcon icon={faCheck}/>}
                  </Button>
                  <span className='family-barlow fw-bold text-scorpion'>Tavuk Izgara</span>
                </Col>
              </Row>
              <Row className='py-2'>
                <Col xs="4">
                  <Button className='checkbox btn-square bg-merino text-scorpion border-0 me-3' onClick={() => toggleMaterial(9)} active={materials.includes(9)}>
                    {materials.includes(9) && <FontAwesomeIcon icon={faCheck}/>}
                  </Button>
                  <span className='family-barlow fw-bold text-scorpion'>Kanada Jambonu</span>
                </Col>
                <Col xs="4">
                  <Button className='checkbox btn-square bg-merino text-scorpion border-0 me-3' onClick={() => toggleMaterial(10)} active={materials.includes(10)}>
                    {materials.includes(10) && <FontAwesomeIcon icon={faCheck}/>}
                  </Button>
                  <span className='family-barlow fw-bold text-scorpion'>Ananas</span>
                </Col>
                <Col xs="4">
                  <Button className='checkbox btn-square bg-merino text-scorpion border-0 me-3' onClick={() => toggleMaterial(11)} active={materials.includes(11)}>
                    {materials.includes(11) && <FontAwesomeIcon icon={faCheck}/>}
                  </Button>
                  <span className='family-barlow fw-bold text-scorpion'>Tavuk Izgara</span>
                </Col>
              </Row>
              <Row className='py-2'>
                <Col xs="4">
                  <Button className='checkbox btn-square bg-merino text-scorpion border-0 me-3' onClick={() => toggleMaterial(12)} active={materials.includes(12)}>
                    {materials.includes(12) && <FontAwesomeIcon icon={faCheck}/>}
                  </Button>
                  <span className='family-barlow fw-bold text-scorpion'>Jalepeno</span>
                </Col>
                <Col xs="4">
                  <Button className='checkbox btn-square bg-merino text-scorpion border-0 me-3' onClick={() => toggleMaterial(13)} active={materials.includes(13)}>
                    {materials.includes(13) && <FontAwesomeIcon icon={faCheck}/>}
                  </Button>
                  <span className='family-barlow fw-bold text-scorpion'>Kabak</span>
                </Col>
                <Col xs="4">
                  <Button className='checkbox btn-square bg-merino text-scorpion border-0 me-3' onClick={() => toggleMaterial(14)} active={materials.includes(14)}>
                    {materials.includes(14) && <FontAwesomeIcon icon={faCheck}/>}
                  </Button>
                  <span className='family-barlow fw-bold text-scorpion'>Soğan</span>
                </Col>
              </Row>
              <Row className='py-2'>
                <Col xs="4">
                  <Button className='checkbox btn-square bg-merino text-scorpion border-0 me-3' onClick={() => toggleMaterial(15)} active={materials.includes(15)}>
                    {materials.includes(15) && <FontAwesomeIcon icon={faCheck}/>}
                  </Button>
                  <span className='family-barlow fw-bold text-scorpion'>Sarımsak</span>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className='pb-5 border-bottom'>
            <Col xs="12" className='py-2'>
              <h5 className='family-barlow fw-bold'>Sipariş Notu</h5>
            </Col>
            <Col xs="12">
            <Input className='resize-none bg-merino border-0' name="text" type="textarea" placeholder='Siparişine eklemek istediğin bir not var mı?'/>
            </Col>
          </Row>
          <Row className='py-5 justify-content-between'>
            <Col xs="4">
              <InputGroup>
                <Button className='bg-merino text-mine-shaft btn-square border-0'>-</Button>
                <Input className='text-center bg-merino border-0 btn-square count' type='number' defaultValue="1"></Input>
                <Button className='bg-merino text-mine-shaft btn-square border-0'>+</Button>
              </InputGroup>
            </Col>
            <Col xs="7" className='bg-merino'>
              <Row className='pt-4 pb-2 px-5'>
                <Col>
                  <Row>
                    <Col xs="12">
                      <h5 className='family-barlow fw-bold'>Sipariş Toplamı</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12" className='pt-3'>
                      <Row>
                        <Col>
                          <h6 className='family-barlow fw-bold'>Seçimler</h6>
                        </Col>
                        <Col className='text-end'>
                          <h6 className='family-barlow fw-bold'>25.00₺</h6>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12" className='pb-3'>
                      <Row className='text-persian-red'>
                        <Col>
                          <h6 className='family-barlow fw-bold'>Toplam</h6>
                        </Col>
                        <Col className='text-end'>
                          <h6 className='family-barlow fw-bold'>110.50₺</h6>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Button className='w-100 bg-lightning-yellow border-0 family-barlow fw-bold text-mine-shaft py-3'>SİPARİŞ VER</Button>
              </Row>
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

export default PizzaForm