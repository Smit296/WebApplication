import React,{ useState } from 'react';
import { Card,Button,Row,Col,Modal} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Actions/cartAction';


const Pizza = ({ pizza }) => {

    const [varient,setVarient] = useState('small')
    const [quantity,setQuantity]=useState(1)
    
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    const addToCartHandler = () =>
    {
        dispatch(addToCart(pizza,quantity,varient))
    }


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
        <Card style={{ width: '18rem',marginTop:'10px'}}>
            <Card.Img variant="top"  src={pizza.image} 
            style={{height:'180px', cursor:'pointer'}}
            onClick={handleShow}
            />
            <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <hr/>
                <Card.Text>
                    <Row>
                        <Col md={6}>
                            <h6>Varients</h6>
                            <select value={varient} onChange={e=>setVarient(e.target.value)}>
                                {pizza.varients.map((varient) => 
                                    (
                                        <option >{varient}</option>
                                    ))}
                            </select>
                        </Col>

                        <Col md={6}>
                            <h6>Quantity</h6>
                            <select value={quantity} onChange={e=>setQuantity(e.target.value)}>
                                {[...Array(10).keys()].map((v,i)=>(
                                <option value={i+1} >{i+1}</option>
                                ))
                                }
                            </select>
                        </Col>

                    </Row>
                </Card.Text>

                <Row>
                    <Col md='6'><b style={{color:'Black'}}>Price : {pizza.prices[0][varient]*quantity}</b></Col>
                    <Col md='6'>
                        <Button  onClick={addToCartHandler} className='bg-warning text-center'>Add to Cart</Button>
                    </Col>
                </Row>
            
            </Card.Body>
            </Card>
            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton style={{color:'Darkgreen'}}>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
        <Card.Img variant="top"  src={pizza.image} 
            style={{height:'180px'}}
            />
            </div>

            <div>
                <h5>Discription: </h5>
                    <h6>
                    {pizza.description}
                    </h6>
            </div>  
        </Modal.Body>
        
      </Modal> 

    </>
  )
}

export default Pizza;