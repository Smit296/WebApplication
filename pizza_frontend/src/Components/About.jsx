import React, { Component } from 'react'
import { Container,Row,Col} from 'react-bootstrap'


const About=()=>
   {
    return (
      <Container style={{marginTop:'50px'}}>
          <h1>Welcome we are</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates fugit libero, quae culpa, quibusdam dignissimos vero ullam vitae nihil quisquam fuga, quam veniam aut vel placeat quis eius excepturi laborum deleniti illum doloribus animi accusantium? Sed delectus quia, rem deleniti voluptas nisi modi culpa ipsa. Accusantium omnis sed unde porro!</p>
        <h1>Our Speciality</h1>
        <Row>
            <Col md={6}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, cupiditate.</p>
            </Col>

            <Col md={6}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, deleniti.</p>
            </Col>
        </Row>
        <h1>Our Chief</h1>
        <Row>
            <Col md={3}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, cupiditate.</p>
            </Col>

            <Col md={3}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, deleniti.</p>
            </Col>
            <Col md={3}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, cupiditate.</p>
            </Col>

            <Col md={3}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, cupiditate.</p>
            </Col>

        </Row>
      </Container>
    )
}

export default About