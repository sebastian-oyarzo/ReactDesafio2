import React, { useState } from 'react'
import SocialButton from './SocialButton'
import { Formulario } from './Formulario'
import { Alert1 } from './Alert1'
import { Container, Row, Col } from 'react-bootstrap'
import './SocialButton.css'


export const Registro = () => {
  const [forAlert, setForAlert ,] = useState('')

    const formAlert = (mensaje) => {
      setForAlert(mensaje)
    }

  return (
    <Container fluid className='border mt-4 p-4'  >
        <Row>
          <h1 className='justify-content-center fs-2 text-center'>Crea una cuenta</h1>
        </Row>
        <Row className="fs-3">
          <Col  xs={{ span: 2, offset: 2 }} className='icons'>
            <SocialButton icons='fa-brands fa-facebook' />
          </Col>
          <Col  xs={{ span: 2, offset: 1 }} className='icons'>
            <SocialButton icons='fa-brands fa-github' />
          </Col>
          <Col  xs={{ span: 2, offset: 1 }} className='icons'>
            <SocialButton icons='fa-brands fa-linkedin' />
          </Col>
        </Row>
        <Row>
          <p className='container text-center mt-3 small'>O usa tu email para registrarte</p>
        </Row>
        <Row>
              <Formulario formAlert={formAlert}/>
        </Row>
        <Row >
              <Alert1 forAlert={forAlert}/>
        </Row>
    </Container>

  )
}