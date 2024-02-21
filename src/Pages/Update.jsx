import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from 'react-router-dom';

function Update() {

    
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const navigate = useNavigate();
    const params = useParams();

     // get one data api
  
  const handleSingleData = () => {
    axios.get(`http://localhost:7000/getId/${params.id}`).then((response)=> {
      // setName(response.data[0].name);
      // setPhone(response.data[0].phone);
      // setAddress(response.data[0].address);
      console.log(response.data)
    }).catch((err) => console.log(err))
  }

//
  useEffect(()=>{
    handleSingleData();
},[])

 // put
 const handleUpdate = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:7000/updateCustomer/${params.id}`,{
     "name" : name,
     "phone": phone,
     "address": address
    }).then(()=> {
     alert("Updated Successfuly...")
     navigate("/customers")
    }).catch((error) => console.log(error))
   }

  return (
    <>
    <h1 className='text-3xl ml-[230px] font-bold mt-[0px] pt-[140px]'>Update Note</h1>
    <div  className="shadow-xl shadow-gray bg-stone-700 w-[350px] h-[230px] absolute left-[450px] top-[200px] ml-20">
    <div className="p-10">
  
    <form>
    <input value={name} className="" type="text" onChange={(event)=> setName(event.target.value)} placeholder="Enter name" />
    <br />  <br />
     <input value={phone} className="" type="text" onChange={(event)=> setPhone(event.target.value)} placeholder="Enter phone" /> 
    <br />  <br />
     <input value={address} className="" type="text" onChange={(event)=> setAddress(event.target.value)} placeholder="Enter address" /> 
        </form> 
        <div className="flex justify-between mt-10">
            <button onClick={handleUpdate} className="bg-orange-400  text-black rounded-md px-3">Update</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default Update