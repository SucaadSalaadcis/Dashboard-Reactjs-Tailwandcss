import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';

function Customers() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const params = useParams();

  // post
  const handleRegisterCust = (e) => {
    e.preventDefault();
    axios.post("http://localhost:7000/createCustomer", {
        name: name,
        phone: phone,
        address: address,
      }) .then(() => {
        alert("Customer Has Been Registered Successfuly..");
        setName("");
        setAddress("");
        setPhone("");
      })
      .catch((error) => console.log(error));
  };


  // get
  const [cust, setCust]= useState([])
  const getAllCustomers = () => {
    axios.get("http://localhost:7000/allCustomers").then((response)=>{
      setCust(response.data);
        // console.log(response)
        // console.log(response.data)
    }).catch((error)=>{
      console.log(error);
    })
  }
  
  
  //
  useEffect(()=>{
    getAllCustomers();
  
})


// delete a
const deleteCust =  (id)=> {
  axios.delete(`http://localhost:7000/deleteCustomer/${id}`).then(()=>{
    alert("Note Has Been Deleted..")
    getAllCustomers();
  }).catch((error)=> console.log(error));
 }


  return (
    <div>
      {/* post */}
      <div class="shadow-xl shadow-gray bg-stone-600 w-[350px] h-[249px] absolute left-[250px] top-[90px] ml-20">
        <div class="p-10">
          <form>
            <input value={name} className="" type="text" onChange={(event) => setName(event.target.value)}
              placeholder="Enter Name"/>
            <br />
            <br />
            <input value={phone} className="" type="text" onChange={(event) => setPhone(event.target.value)} placeholder="Enter Phone"/>
            <br />
            <br />
            <input value={address} className="" type="text" onChange={(event) => setAddress(event.target.value)} placeholder="Enter Address"  />
          </form>

          <div class="flex justify-between mt-10">
            <button class="bg-orange-400  text-black rounded-md px-3" onClick={handleRegisterCust} >Save </button>
            {/* <Link to={`/update/${props.id}`} className='bg-white  p-2 rounded-md'>Update</Link> */}
          </div>
        </div>
      </div>

      {/* Display */}
      <div className="pt-[14%] ml-[35%] ">
        <h1 className="font-bold ml-[120px] mb-4">Customer Information</h1>
        <table className="border-separate border-spacing-2 border rounded-md border-slate-500 bg-white shadow-2xl">
          <thead>
            <tr>
              <th className="border-2 border-slate-600 text-red-400 " scope="col">CustName</th>
              <th className="border-2 border-slate-600 text-red-400 " scope="col">CustPhone</th>
              <th className="border-2 border-slate-600 text-red-400 " scope="col">CustAddress</th>
              {/* <th className="border-2 border-slate-600 text-red-400 " scope="col">ID</th> */}
              <th className="border-2 border-slate-600 text-red-400 " scope="col">Edit</th>
              <th className="border-2 border-slate-600 text-red-400 " scope="col">Delete</th>
            </tr>
          </thead>
          {
            cust.map((data)=>{
             return (
              <tr>
              <td className="border border-slate-700">{data.name}</td>
              <td className="border border-slate-700 ">{data.phone}</td>
              <td className="border border-slate-700 ">{data.address}</td>
              {/* <td className="border border-slate-700 ">{data._id}</td> */}
              <td><Link to={`/update/${data._id}`}><i class="fa-regular fa-pen-to-square ml-5 text-orange-400 cursor-pointer"></i></Link></td>
              <td><i class="fa-sharp fa-solid fa-trash ml-5 text-orange-400 cursor-pointer" onClick={()=> deleteCust(data._id)}></i></td>
             
              </tr>
              ) 
            })
          }
           </table> 
    </div>

    {/* update */}
   

 </div>
  )
}


export default Customers;
