import React,{useEffect} from 'react'

//send a request from  the frontend to backend and selector is used to get a data from state
import {useDispatch,useSelector} from "react-redux";
import { Container,Row,Col } from 'react-bootstrap';
import {getAllPizzas} from '../Actions/pizzaAction';
import Pizza from '../Components/Pizza';
import {BiLoaderCircle} from 'react-icons/bi'
import Loader from '../Components/Loader';
import Error from '../Components/Error';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzastate=useSelector((state) => state.getAllPizzaReducer);
  const {loading,pizzas,error} = pizzastate;
  useEffect(()=> {
    dispatch(getAllPizzas());},
    [dispatch]);
     

  return(
    <>
    <Container>
      {loading ? (<center><Loader/></center>) : error ? (<Error>Error while fetching pizzas {error}</Error>):(
        <Row>
            {pizzas.map((pizza)=>(
                <Col md={4}>
                    <Pizza pizza={pizza}/>
                </Col>
            ))}
        </Row>
      )}
    </Container>
    </>
  );
};

export default HomeScreen