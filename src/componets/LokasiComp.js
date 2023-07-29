import React from 'react'
import { Container, Row, Col,  } from 'react-bootstrap'

const LokasiComp = () => {
  return (
    <div className='map-section min-vh-100' >
        <Container>
            <Row>
                <Col>
                    <h1 className='text-center fw-bold' data-aos="fade-up" >Lokasi Villa Puncak Bidadari</h1>
                    <p className='text-center'>Alamat: Jl. Raya Puncak Gadog No.KM 84, Tugu Utara, Kec. Cisarua, Kabupaten Bogor, Jawa Barat 16750</p>
                    <p className='text-center'> Jam: Buka 24 jam</p>
                    <p className='text-center'>Telepon: 0821-1004-9400</p>
                    <p className='text-center'>Provinsi: Jawa Barat</p>

                </Col>
                <Col className='lokasi text-center'> 
            <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Jl.%20Raya%20Puncak%20Gadog%20No.KM%2084,%20Tugu%20Utara,%20Kec.%20Cisarua,%20Kabupaten%20Bogor,%20Jawa%20Barat%2016750+(Villa%20Puncak%20Bidadari)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Find Population on Map</a></iframe>
                </Col>

            </Row>
        </Container>
    </div>
  )
}

export default LokasiComp
