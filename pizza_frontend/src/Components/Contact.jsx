import React from 'react'
import { Container,Row,Col,Table,Image } from 'react-bootstrap'
import {FaPhoneAlt} from 'react-icons/fa'
import {ImMobile} from 'react-icons/im'
import {MdEmail} from 'react-icons/md'


const Contact = () => {
  return (
    <>
        <Container style={{marginTop:'50px'}}>
            <Row>
                <Col md={6}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia perspiciatis ipsum culpa a aspernatur neque at, hic impedit sequi cum illo totam qui odit itaque! Sunt soluta atque temporibus, voluptatum deleniti ipsum numquam sequi vero sint tempore quas odio omnis facilis ad dolorem dignissimos debitis eum eius ab quo veritatis? Quis veniam perspiciatis accusantium reiciendis quam nemo voluptas, doloribus omnis aspernatur consequuntur quod amet atque ut tempore dolore, laboriosam illo voluptate sunt neque corporis rem aliquid corrupti dolorem. Architecto quisquam nesciunt rerum at qui sint, vero vitae distinctio, necessitatibus quam quasi corrupti ipsum ut, vel dolor eum incidunt doloremque. Optio.</p>
                <Table striped bordered hover text-center className='text-center'>
                <thead>
                    <tr>
                    <th className='bg-warning text-center' colSpan={3}>---Contact Details---</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><FaPhoneAlt/></td>
                    <td>Smit Donga</td>
                    <td>12345-67890</td>
                    </tr>

                    <tr>
                    <td><ImMobile/></td>
                    <td>Jeet Donga</td>
                    <td>12345-34578</td>
                    </tr>

                    <tr>
                    <td><MdEmail/></td>
                    <td>Harshal Shiyani</td>
                    <td>12345-78956</td>
                    </tr>
                
                </tbody>
                </Table>
                </Col>

                <Col>
                    <Image src='images/farmhouse.jpg' style={{height:"100%",width:"100%"}}></Image>
                </Col>
            </Row>
        </Container>
        
    </>
  )
}

export default Contact