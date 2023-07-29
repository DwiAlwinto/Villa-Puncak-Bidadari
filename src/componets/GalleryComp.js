import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

//import gambar
import Gallery1 from "../assets/img/gallery/Plataran-Puncak.jpg";
import Gallery2 from "../assets/img/gallery/Puncak-Surrounding-6.jpg";
import Gallery3 from "../assets/img/gallery/Anandita-3.jpg";
import Gallery4 from "../assets/img/gallery/Garden-Picnic-61.jpg";
import Gallery5 from "../assets/img/gallery/Horseback-Riding-12-1.jpg";
import Gallery6 from "../assets/img/gallery/Narendra-1.jpg";
import Gallery7 from "../assets/img/gallery/Narendra-24.jpg";
import Gallery8 from "../assets/img/gallery/Narendra-27.jpg";
import Gallery9 from "../assets/img/gallery/Narendra-42.jpg";
import Gallery10 from "../assets/img/gallery/PLP_Villa-Sasmaya_bedroom.jpg";
import Gallery11 from "../assets/img/gallery/Plataran-Puncak_surrouding.jpg";
import Gallery12 from "../assets/img/gallery/Sasmaya-14.jpg";
import Gallery13 from "../assets/img/gallery/Sasmaya-17.jpg";
import Gallery14 from "../assets/img/gallery/Sasmaya-3.jpg";
import Gallery15 from "../assets/img/gallery/Inggrida-45.jpg";
import Gallery16 from "../assets/img/gallery/Inggrida-47.jpg";
import Gallery17 from "../assets/img/gallery/Inggrida-48.jpg";
import Gallery18 from "../assets/img/gallery/Inggrida-49.jpg";



const GalleryComp = () => {
  return (
    <div className='gallery min-vh-100 d-flex align-item-center' id='Gallery'>
      <Container>
        <Row>
          <Col>
            <h2 className='penginapan text-center fw-bold mb-5' data-aos="fade-up">Villa Puncak Bidadari</h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4">
          <Col>
            <img src={Gallery1} alt="unsplash.com" className='w-100' data-aos="fade-down-right" />
          </Col>
          <Col>
            <img src={Gallery2} alt="unsplash.com" className='w-100' data-aos="fade-down-right" data-aos-delay='200' />
          </Col>
          <Col>
            <img src={Gallery3} alt="unsplash.com" className='w-100'  data-aos="fade-down-right" data-aos-delay='300'/>
          </Col>
          <Col>
            <img src={Gallery4} alt="unsplash.com" className='w-100' data-aos="fade-up-left" data-aos-delay='400'/>
          </Col>
          <Col>
            <img src={Gallery5} alt="unsplash.com" className='w-100' data-aos="fade-up-left" data-aos-delay='500'/>
          </Col>
          <Col>
            <img src={Gallery11} alt="unsplash.com" className='w-100' data-aos="fade-up-left" data-aos-delay='600'/>
          </Col>
          <Col>
            <img src={Gallery7} alt="unsplash.com" className='w-100' data-aos="fade-up-right" data-aos-delay='700'/>
          </Col>
          <Col>
            <img src={Gallery8} alt="unsplash.com" className='w-100' data-aos="fade-up-right" data-aos-delay='800'/>
          </Col>
          <Col>
            <img src={Gallery9} alt="unsplash.com" className='w-100' data-aos="fade-up-right" data-aos-delay='900'/>
          </Col>
          <Col>
            <img src={Gallery10} alt="unsplash.com" className='w-100' data-aos="fade-up-left" data-aos-delay='1000'/>
          </Col>
          <Col>
            <img src={Gallery6} alt="unsplash.com" className='w-100' data-aos="fade-up-left" data-aos-delay='1100'/>
          </Col>
          <Col>
            <img src={Gallery12} alt="unsplash.com" className='w-100' data-aos="fade-up-left" data-aos-delay='1200'/>
          </Col>
          <Col>
            <img src={Gallery13} alt="unsplash.com" className='w-100' data-aos="fade-up-right" data-aos-delay='1300'/>
          </Col>
          <Col>
            <img src={Gallery14} alt="unsplash.com" className='w-100' data-aos="fade-up-right" data-aos-delay='1400'/>
          </Col>
          <Col>
            <img src={Gallery15} alt="unsplash.com" className='w-100' data-aos="fade-up-right" data-aos-delay='1500'/>
          </Col>
          <Col>
            <img src={Gallery16} alt="unsplash.com" className='w-100' data-aos="fade-up-left" data-aos-delay='1600'/>
          </Col>
          <Col>
            <img src={Gallery17} alt="unsplash.com" className='w-100' data-aos="fade-up-left" data-aos-delay='1700'/>
          </Col>
          <Col>
            <img src={Gallery18} alt="unsplash.com" className='w-100' data-aos="fade-up-left" data-aos-delay='1800'/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default GalleryComp
