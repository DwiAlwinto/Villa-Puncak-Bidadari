import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'

const FaqComp = () => {
  return (
    <div className='faq' id='Faq'>
      <Container>
        <Row className='mb-5'>
            <Col>
              <h2 className='text-center fw-bold' data-aos="fade-up">Yang Biasa Di Tanyakan</h2>
              <p className='text-center' data-aos="fade-up" data-aos-delay='200'>Pertanyaan yang sering ditanyakan di Villa Kami.</p>  
            </Col>
        </Row>
        <Row className='row-cols-lg-2  row-cols-1 g-4'>
            <Col>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Bagaimana Cara Booking ya ? </Accordion.Header>
                        <Accordion.Body>
                        1. Hubungi No Whatshapp Villa Puncak Bidadari.
                        <br />
                        2. Catat dan ingat nama / kode villa yang tertera di keterangan atau judul villa, untuk menanyakan harga dan ketersediaan kepada kami
                        <br />
                        3. Hubungi kami melalui telpon dan whatsapp untuk mengetahui harga dan ketersediaan yang akan anda gunakan.
                        <br />
                        4. DP minimal 30% dari total. Untuk DP bisa transfer melalui Bank BCA, Mandiri, BRI & BNI atau bisa juga uang tunai dengan mengantar ke lokasi villa.
                        <br />
                        5. Kwitansi atau tanda terima  booking akan di kirimkan melalui whatsapp jika di butuhkan.
                        <br />
                        6. Pada hari H kami kami akan pandu menuju villa yang anda booking dan kami akan jemput dari tempat yang mudah di temui sesuai janji seperti pintu gerbang masuk, per 3 an atau tempat lainya.
                        <br />
                        7. Jika anda bingung untuk memilih villa yang pass dengan kebutuhan dan budget, anda bisa langsung menghubungi kami melalui telpon atau whatsapp dengan menyebutkan kapasitas atau jumlah kamar yang anda butuhkan.

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
            <Col>
                <Accordion>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header> Apakah tempatnya nyaman ? </Accordion.Header>
                        <Accordion.Body>
                        Villa Punacak Bidadari Terletak di dataran tinggi berkabut di Puncak, Jawa Barat, Villa Puncak by Plataran menawarkan tempat peristirahatan yang terpencil namun nyaman dari kota metropolitan Jakarta yang sibuk untuk bersantai dan menyegarkan diri.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
            <Col>
                <Accordion>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header> Apakah ada WiFi nya ? </Accordion.Header>
                        <Accordion.Body>
                        Kami menyediakan fasilitas Free Wifi. Anda dapat menemukan Nama dan Password Wifi di area ruang tamu atau Meja TV. Namun Mohon maaf sekali karena lokasi Villa kami berada di daerah puncak dan juga tergantung cuaca di daerah Villa, sehingga sering mengalami masalah dalam jaringan dari pusat pelayanan Indihome. Kami selalu berusaha untuk segera melakukan pelaporan dan perbaikan jika terjadi masalah jaringan.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
            <Col>
                <Accordion>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Bagaimana lingkungan Villa dan sekitarnya ? </Accordion.Header>
                        <Accordion.Body>
                        Meskipun tersembunyi dengan tenang, vila-vila ini terletak dekat dengan tujuan populer seperti Taman Safari, Perkebunan Teh Gunung Mas, Taman Bunga Nusantara, dan Puncak Pass yang berdekatan. Lintasan gunung yang indah ini terletak di punggung bukit di sebelah utara Taman Nasional Gunung Gede Pangrango, dan menghubungkan kota Bogor dan Bandung. Mencapai ketinggian 1500 m di titik tertingginya, pass ini menjadi tempat liburan akhir pekan favorit warga Jakarta yang datang untuk menikmati udara bersih, angin sejuk, dan jalur pegunungan yang berkelok-kelok.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
            <Col>
                <Accordion>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Sudah beroperasi berapa lama ? </Accordion.Header>
                        <Accordion.Body>
                         Villa Puncak Bidadari dibangun dari tahun 2010 dan Terletak di dataran tinggi berkabut di Puncak, Jawa Barat, Villa Puncak Bidadari menawarkan tempat peristirahatan yang terpencil namun nyaman dari kota metropolitan Jakarta yang sibuk untuk bersantai dan menyegarkan diri. Villa-villa pribadi yang luas di tengah keindahan alam yang tak tertandingi dengan hangat mengundang keluarga untuk pengalaman liburan "rumah-jauh-dari-rumah", perusahaan untuk pertemuan dan retret perusahaan yang menginspirasi, dan sekelompok teman untuk liburan akhir pekan kota yang tak terlupakan.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
            <Col>
                <Accordion>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header> Apakah sudah Tersertifikasi dengan baik ? </Accordion.Header>
                        <Accordion.Body>
                        Villa ini sudah Standardisasi dan Sertifikasi Kebersihan, Kesehatan, Keamanan dan Kelestarian Lingkungan di Tempat Penyelenggaraan Pariwisata.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
            <Col>
                <Accordion>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>Berapa kapasitas maksimal penginap ? </Accordion.Header>
                        <Accordion.Body>
                        Villa Puncak Bidadari Terdiri atas dua kamar tidur, vila ini biasanya disewa untuk pasangan yang sedang berbulan madu. Dengan harga sewa mulai Rp 3,5 juta per malam, unit itu boleh ditempati hingga 6. luas dan sebenarnya bisa muat banyak orang. Tapi kami mengutamakan kenyamanan makanya dibatasi untuk 6 orang, dengan kapasitas asli 4 orang,
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
            <Col>
                <Accordion>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>Apakah cocok untuk anak-anak? </Accordion.Header>
                        <Accordion.Body>
                        Villa ini cocok untuk anak-anak dan keluarga karena Villa Puncak Bidadari mempunya fasilitas yang lengkap untuk anak-anak dan keluarga.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FaqComp
