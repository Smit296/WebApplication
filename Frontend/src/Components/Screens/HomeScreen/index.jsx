
import React,{useEffect,useState} from 'react';
import { UseDispatch, useDispatch ,useSelector} from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import ComponentWrapper from '../../HOC/ComponentWrapper';
import SideBar from '../../Container/SideBar';
import ProductContainer from '../../Container/ProductContainer';
import { fetchData,verifyUser } from '../../../Store/Actions/authActions';


const Index = () => {
  const dispatch = useDispatch();
  const {users} = useSelector(state=>state.auth)
  const {verifyStatus} = useSelector(state=>state.auth)


  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  console.log("users", users)


  useEffect(() => {
    dispatch(fetchData())
      .then(() => {
        console.log('Data fetched successfully');
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  useEffect(() => {
    const verifyCookie = async () => {
      console.log("cookies", cookies)
      if (!cookies.token) {
        navigate("/login");
      }

      dispatch(verifyUser());
      console.log(verifyStatus)
      console.log("User verified",JSON.parse(verifyStatus))
      const { status, user } = verifyStatus;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  

  
  
  return (
    <>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((row, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>


    </>
  );
};

export default ComponentWrapper(Index);
