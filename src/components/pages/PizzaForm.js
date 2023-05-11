import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import * as Yup from "yup";
import { Row, Col, Input, Button, InputGroup, Form } from "reactstrap";


import Header from "../layouts/Header";
import ExtrasList from '../layouts/ExtrasList';
import Footer from "../layouts/Footer";

import { foods, rowsCount, pizzaExtras } from '../../utils/MockData';
import { headerImg } from "../../utils/Images";


const PizzaForm = () => {
  const navigation = useHistory();
  const [food] = useState(foods[1]);
  const [isValid, setValid] = useState(false);
  const [data, setData] = useState({
    size: "",
    dough: "",
    extras: [],
    flName: "",
    note: "",
    pizzaCount: 1,
    price: 0
  });
  const [errors, setErrors] = useState({
    size: "",
    dough: "",
    extras: "",
    flName: "",
    note: "",
    pizzaCount: ""
  });
  const [total, setTotal] = useState(food.price);

  const userSchema = Yup.object().shape({
    size: Yup.number().oneOf([0,1,2]).transform((value) => Number.isNaN(value) ? null : value ).required("Pizza boyutunu seçmelisin."),
    dough: Yup.number().oneOf([0,1,2]).transform((value) => Number.isNaN(value) ? null : value ).required("Pizza hamurunu seçmelisin."),
    extras: Yup.array().max(10, "En fazla 10 malzeme seçebilirsin."),
    flName: Yup.string().min(2, "İsim en az 2 karakter olmalıdır").required(),
    note: Yup.string().nullable(),
    pizzaCount: Yup.number().min(1)
  });

  const handleChange = (e) => {
    const {name, value, type} = e.target;
    let val;

    if(type === "checkbox"){
      val = data.extras.includes(parseInt(value)) ? data.extras.filter(i => i !== parseInt(value)) : [...data.extras, parseInt(value)];
    }else{
      if(name === "pizzaCount"){
        if(parseInt(value)) {
          val = data.pizzaCount + 1;
        }else{
          if(data.pizzaCount - 1 < 1){
            val = 1;
          }else{
            val = data.pizzaCount - 1;
          }
        }
      }else{
        if(type === "text" || type === "textarea"){
          val = value;
        }else{
          val = parseInt(value);
        }
      }
    }

    Yup.reach(userSchema, name).validate(val)
    .then(() => setErrors({...errors, [name]: ""}))
    .catch(err => setErrors({...errors, [name]: err.errors[0]}));
    setData({...data, [name]: val});
  }

  const checkLimit = (id) => !data.extras.includes(id) && data.extras.length === 10 ? true : false;

  const onSubmit = e => {
    e.preventDefault();
    userSchema.isValid(data)
    .then(valid => {
      if(valid) {
        axios.post("https://reqres.in/api/users", {data: {foodData: food, order: data}})
        .then(resp => {
          navigation.push("/order-success", resp.data)
        })
      }
    });
  }
  
  useEffect(() => {
    userSchema.isValid(data).then(valid => setValid(valid));
    setTotal((food.price + (data.extras.length * 5)) * data.pizzaCount);
  }, [data, food, userSchema])

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
              <h3 className='family-barlow fw-bold'>{food.name}</h3>
            </Col>
          </Row>
          <Row className='py-2'>
            <Col>
              <Row className='family-barlow fw-bold align-items-center'>
                <Col xs="10" className='fs-4'>{food.price}₺</Col>
                <Col xs="auto" className='text-muted fs-7 text-end'>{food.review.score}</Col>
                <Col xs="auto" className='text-muted fs-7 text-end'>({food.review.count})</Col>
              </Row>
            </Col>
          </Row>
          <Row className='py-2'>
            <Col className='d-flex justify-content-between align-items-center family-barlow text-scorpion text-justify'>
                <p>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Form id="pizza-form" className='row justify-content-center py-5' onSubmit={onSubmit}>
        <Col xs="4">
          <Row>
            <Col xs="6">
              <Row>
                <Col xs="12">
                  <h5 className='family-barlow fw-bold'>Boyut Seç <span className='text-persian-red'>*</span></h5>
                </Col>
                <Col xs="12" className='family-barlow py-3'>
                    <Row>
                      <Col xs="3">
                        <Button className='rounded-circle fw-bold bg-merino text-scorpion border-0 mx-2 px-4 py-3' onClick={handleChange} name="size" value="0" active={data.size === 0}>S</Button>
                      </Col>
                      <Col xs="3">
                        <Button className='rounded-circle fw-bold bg-merino text-scorpion border-0 mx-2 px-4 py-3' onClick={handleChange} name="size" value="1" active={data.size === 1}>M</Button>
                      </Col>
                      <Col xs="3">
                        <Button className='rounded-circle fw-bold bg-merino text-scorpion border-0 mx-2 px-4 py-3' onClick={handleChange} name="size" value="2" active={data.size === 2}>L</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        {!!errors.size && <span className='text-danger'> {errors.size} </span>}
                      </Col>
                    </Row>
                </Col>
              </Row>
            </Col>
            <Col xs="6">
              <Row>
                <Col xs="12">
                  <h5 className='family-barlow fw-bold'>Hamur Seç <span className='text-persian-red'>*</span></h5>
                </Col>
                <Col xs="12" className='family-barlow py-3'>
                  <Input id="size-dropdown" className='p-3 bg-merino border-0 text-scorpion' name="dough" type="select" onChange={handleChange} defaultValue="--Hamur Kalınlığı Seç--">
                    <option disabled>--Hamur Kalınlığı Seç--</option>
                    <option value="0">Normal</option>
                    <option value="1">İnce</option>
                    <option value="2">Süpper İnce</option>
                  </Input>
                </Col>
                <Col xs="12">
                  {!!errors.dough && <span className='text-danger'> {errors.dough} </span>}
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
              <ExtrasList rowsCount={rowsCount} pizzaExtras={pizzaExtras} handleChange={handleChange} checkLimit={checkLimit}/>
            </Col>
            <Col xs="12">
              {!!errors.extras && <span className='text-danger'> {errors.extras} </span>}
            </Col>
          </Row>
          <Row>
            <Col xs="12" className='py-2'>
              <h5 className='family-barlow fw-bold'>Ad Soyad <span className='text-persian-red'>*</span></h5>
            </Col>
            <Col xs="12">
              <Input id="name-input" className='resize-none py-3 bg-merino border-0' name="flName" type="text" placeholder='Ad Soyad' onChange={handleChange} />
              {!!errors.flName && <span className='text-danger'> {errors.flName} </span>}
            </Col>
          </Row>
          <Row className='pb-5 pt-3 border-bottom'>
            <Col xs="12" className='py-2'>
              <h5 className='family-barlow fw-bold'>Sipariş Notu</h5>
            </Col>
            <Col xs="12">
            <Input id="special-text" className='resize-none py-3 bg-merino border-0' name="note" type="textarea" placeholder='Siparişine eklemek istediğin bir not var mı?' onChange={handleChange}/>
            </Col>
          </Row>
          <Row className='py-5 justify-content-between'>
            <Col xs="4">
              <InputGroup>
                <Button onClick={handleChange} name="pizzaCount" value="0" className='bg-merino text-mine-shaft btn-square border-0'>-</Button>
                <Input className='text-center bg-merino border-0 btn-square count' type='number' value={data.pizzaCount} onChange={handleChange}/>
                <Button onClick={handleChange} name="pizzaCount" value="1" className='bg-merino text-mine-shaft btn-square border-0'>+</Button>
              </InputGroup>
            </Col>
            <Col xs="7" className='bg-merino rounded-top'>
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
                          <h6 className='family-barlow fw-bold'>{total}₺</h6>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Button className='w-100 bg-lightning-yellow border-0 family-barlow fw-bold text-mine-shaft py-3' disabled={!isValid}>SİPARİŞ VER</Button>
              </Row>
            </Col>
          </Row>
        </Col>
      </Form>
      <Row>
          <Col>
              <Footer/>
          </Col>
      </Row>
    </>
  )
}

export default PizzaForm