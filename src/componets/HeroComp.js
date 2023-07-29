import React from 'react'
import {Container, Row, Col} from "react-bootstrap"

const HeroComp = () => {
  return (
    <div className='hero min-vh-100 w-100' id='Home'>
      <Container>
        <Row>
          <Col>
            <h1 className='text-white text-center fs-1 animate__animated animate__fadeInUp'>Villa Puncak Bidadari</h1>
            <p className='text-white text-center text-white-75 animate__animated animate__fadeInUp animate__delay-1s'>Mari bersantai sejenak, untuk merasakan kenyamanan di Villa Puncak Bidadari.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HeroComp
