import React from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';


function AboutComp() {
  return (

    <div>
      <Jumbotron>
        <h1 className="display-3">About Us</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>

      <Row>
        <Col><CardComp id="1" judul="Perpustakaan" tanggal="22/06/2929" keterangan="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla molestias mollitia beatae, delectus fugit velit sequi fuga eligendi tempore. Odit veniam totam cupiditate iure commodi alias error illum aperiam voluptatum?" /></Col>
        <Col><CardComp id="2" judul="Tatanan Buku" tanggal="22/06/2930" keterangan="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla molestias mollitia beatae, delectus fugit velit sequi fuga eligendi tempore. Odit veniam totam cupiditate iure commodi alias error illum aperiam voluptatum?" /></Col>
        <Col><CardComp id="3" judul="Perbukuan" tanggal="22/06/2019" keterangan="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla molestias mollitia beatae, delectus fugit velit sequi fuga eligendi tempore. Odit veniam totam cupiditate iure commodi alias error illum aperiam voluptatum?" /></Col>
        </Row>
        <Row>
        <Col><CardComp id="4" judul="Perhotelan" tanggal="22/06/2019" keterangan="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla molestias mollitia beatae, delectus fugit velit sequi fuga eligendi tempore. Odit veniam totam cupiditate iure commodi alias error illum aperiam voluptatum?" /></Col>
        <Col><CardComp id="5" judul="test" tanggal="22/06/2019" keterangan="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla molestias mollitia beatae, delectus fugit velit sequi fuga eligendi tempore. Odit veniam totam cupiditate iure commodi alias error illum aperiam voluptatum?" /></Col>
        <Col><CardComp id="6" judul="Perbukuan" tanggal="22/06/2019" keterangan="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla molestias mollitia beatae, delectus fugit velit sequi fuga eligendi tempore. Odit veniam totam cupiditate iure commodi alias error illum aperiam voluptatum?" /></Col>
      
        </Row>



    </div>

  )
}

export default AboutComp
