import React, { useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
import { Switch,Route } from "react-router-dom";
import UserList from "../Components/Admin/UserList";
import PizzaList from "../Components/Admin/PizzaList";
import AddnewPizz from "../Components/Admin/AddnewPizz";
import OrderList from "../Components/Admin/OrderList";


const AdminScreen = ({ history }) => {
  
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: "400px" }}>
              <Button onClick={() => history.push("/Admin/UserList")}>
                All Users
              </Button>
              <Button onClick={() => history.push("/Admin/PizzaList")}>
                All Pizzas
              </Button>
              <Button onClick={() => history.push("/Admin/AddnewPizz")}>
                Add New Pizza
              </Button>
              <Button onClick={() => history.push("/Admin/OrderList")}>
                All Orders
              </Button>
            </ButtonGroup>
          </Col>
          
          <Col md={8}>
            <Switch>
            <Route path="/Admin" component={UserList} exact/>
              <Route path="/Admin/UserList" component={UserList} exact/>
              <Route path="/Admin/PizzaList" component={PizzaList} exact/>
              <Route path="/Admin/AddnewPizz" component={AddnewPizz} exact/>
              <Route path="/Admin/OrderList" component={OrderList} exact/>
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminScreen;