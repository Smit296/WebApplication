import React,{useState,useEffect} from 'react'
import { Container,Form,Button} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux';
import { loginUser } from '../Actions/userAction'; 

const Login = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (localStorage.getItem("currentUser")) {
        window.location.href = "/";
      }
    }, []);
    const loginHandler = () => {
      const user = { email, password };
      dispatch(loginUser(user));
    };
  return (
    <>
      <Container style={{marginTop:'20px'}}>
    <div className="container" >
        <div className="row">
          <div className="col-md-6 col-10 mx-auto" style={{border:'2px solid gray',borderRadius:'5px'}}>
        <Form style={{margin:'20px'}}>
            <h1 style={{textAlign:'center'}}>Login</h1>
        

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password}
              onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="success" onClick={loginHandler}>
            Submit
        </Button>
        </Form>
        </div>
        </div>
        </div>
    </Container>
    </>
  );
};

export default Login;