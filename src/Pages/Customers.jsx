import axios from "axios";
import React, { useEffect, useState } from "react";

function Customers() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

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
      <div class="shadow-xl shadow-gray bg-orange-400 w-[350px] h-[240px] absolute left-[450px] top-[130px] ml-20">
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
            <button class="bg-black text-orange-400 rounded-md px-3" onClick={handleRegisterCust} >Save </button>
            <button class="bg-black text-orange-400 rounded-md px-3">Close</button>
          </div>
        </div>
      </div>

      {/* Display */}
      <div className="pt-[14%] ml-[60%] ">
        <table className="border-separate border-spacing-2 border rounded-md border-slate-500 bg-white shadow-2xl">
          <thead>
            <tr>
              <th className="border-2 border-slate-600 text-red-400 " scope="col">CustName</th>
              <th className="border-2 border-slate-600 text-red-400 " scope="col">CustPhone</th>
              <th className="border-2 border-slate-600 text-red-400 " scope="col">CustAddress</th>
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
              <td><i class="fa-sharp fa-solid fa-trash ml-5 text-orange-400 cursor-pointer" onClick={()=> deleteCust(data._id)}></i></td>
              </tr>
              ) 
            })
          }
           </table> 
    </div>

 </div>
  )
}


export default Customers;
