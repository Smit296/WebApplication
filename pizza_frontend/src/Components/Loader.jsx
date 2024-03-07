import React from 'react'
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return <Spinner animation="border" variant="info" style={{width:'100px',height:'100px'}}/>
}

export default Loader;