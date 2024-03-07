import React,{useState} from 'react'
import { Container,Form,Button} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux';
import {registerUser} from '../Actions/userAction';
import Loader from '../Components/Loader';
import Error from '../Components/Error';
import Success from '../Components/Success';

const Register = () => {

    const [name, setName] =useState('')
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')
    const [confirmPassword, setConfirmpassword] =useState('')

    const registerState = useSelector((state)=>state.registerUserReducer)

    const {error,success,loading} = registerState;

    const dispatch = useDispatch();

const registerhandler = () =>{
    if(password!==confirmPassword)
    {
        alert('Password do not match')
    }
    else
    {
        const user = {name,email,password,confirmPassword}
        dispatch(registerUser(user));
        console.log(user);
    }
}
  return (
    <>
    <Container style={{marginTop:'20px'}}>
        {loading && <Loader/>}
        {success && <Success success="User register successfully"/>}
        {error && <Error error="somthing went wrong"/>}
    <div className="container" >
        <div className="row">
          <div className="col-md-6 col-10 mx-auto" style={{border:'2px solid gray',borderRadius:'5px'}}>
        <Form style={{margin:'20px'}}>
            <h1 style={{textAlign:'center'}}>Registration</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name"  value={name} onChange={e=>setName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)} />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password"  value={confirmPassword} onChange={e=>setConfirmpassword(e.target.value)}/>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="success" onClick={registerhandler} >
            Submit
        </Button>
        </Form>
        </div>
        </div>
        </div>
    </Container>
    </>
  )
}

export default Register