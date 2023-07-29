import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ServicesComp = () => {
  return (
    <div className="services min-vh-100 d-flex align-item-center" id="Services">
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="text-center fw-bold" data-aos="fade-up">Services</h1>
            <p className="text-center" data-aos="fade-up" data-aos-delay='200'>
            Kami di sini untuk membantu Anda menemukan Viila terbaik untuk Anda.
            </p>
          </Col>
        </Row>

        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
          <Col className="text-center py-5 px-3" data-aos="fade-down-right" data-aos-delay='400' >
            <i class="fa-solid fa-coins fa-4x text-warning mb-4"></i>
            <h5 className="fw-bold">Harga Terjangkau</h5>
            <p>Harga terjangkau dan pemandangan indah yang menakjubkan.</p>
          </Col>

          <Col className="text-center py-5 px-3" data-aos="zoom-in"  data-aos-delay='700'>
            <i class="fa-solid fa-thumbs-up fa-4x text-primary mb-4"></i>
            <h5 className="fw-bold">Fasilitas Terbaik</h5>
            <p>Selain lebih private, Vila ini juga punya fasilitas yang bagus dan tak kalah dengan hotel. </p>
          </Col>

          <Col className="text-center py-5 px-3" data-aos="fade-up-left" data-aos-delay='800' >
            <i class="fa-solid fa-shield-halved fa-4x text-success mb-4"></i>
            <h5 className="fw-bold">Tersertifikasi</h5>
            <p>Villa ini sudah Standardisasi dan Sertifikasi Kebersihan, Kesehatan, Keamanan dan Kelestarian Lingkungan di Tempat Penyelenggaraan Pariwisata.</p>
          </Col>
        </Row> 
      </Container>
    </div>
  );
};

export default ServicesComp;
