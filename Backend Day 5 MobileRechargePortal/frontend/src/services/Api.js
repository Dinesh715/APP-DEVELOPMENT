import axios from "axios";

const token = localStorage.getItem("Token");
const authHeader = `Bearer ${token}`


const headers = {
  'Authorization': authHeader,
  'Content-Type': 'application/json',
};

//appserver endpoint
// const URI = 'http://15.207.14.101:8080'
const URI = 'http://localhost:8080';




const getUser = async () => await axios.get(`${URI}/user/get`, { headers });
const getUserbyId = async (id) => await axios.get(`${URI}/user/find/${id}`, { headers });

const rechargepost = async (formdata) =>await axios.post(`${URI}/mobile-recharges/post`,formdata,{headers})
const userLogin = (signin) => axios.post(`${URI}/api/entry/auth_user`, signin);
const userRegister = (register) => axios.post(`${URI}/api/entry/post`, register);
const adminLogin = (signin) => axios.post(`${URI}/admin/login`, signin, { headers });




export {getUser, getUserbyId,  adminLogin,userLogin,userRegister,rechargepost}