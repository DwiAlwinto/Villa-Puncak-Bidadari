import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const FooterComp = () => {
  return (
    <div className='footer pb-3 pt-4' id='contact-me'>
        <Container>
            <Row>
                <Col>
                    <h3 className='fw-bold text-white'>Villa Puncak Bidadari</h3>
                </Col>
                <Col className='text-end'>
                <a href="https://www.instagram.com/plataran.puncak/"> <i class="fa-brands fa-instagram text-danger fa-2x mx-lg-3 mx-2"></i> </a>
                <a href="https://wa.me/+6285740070442"><i class="fa-brands fa-square-whatsapp text-success fa-2x mx-lg-3 mx-2"></i></a>
                <a href='https://web.facebook.com/pl.puncak/?locale=id_ID&_rdc=1&_rdr'> <i class="fa-brands fa-facebook text-primary fa-2x mx-lg-3 mx-2" href=""></i></a>
                
                </Col>
            </Row>  
            <Row className='pt-5'>
                <Col>
                    <p className='text-center text-white-50'>&copy; Copyright by AlwinDev 2023, All Right Reserved. </p>
                </Col>
            </Row>

        </Container>
    </div>
  )
}

export default FooterComp
