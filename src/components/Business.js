import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signupReq } from '../api-helper';
import '../App.css';


function Business() {
   const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        business_name: '',
        gst: '',
        address:''
      });
    
      const changeHandler = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
      const changeSubmit=e=>{
        try{

          e.preventDefault();
          console.log(inputs); 
          signupReq(inputs);
          navigate("/l");
        }

        catch{
          const x= (err)=>console.log(err);
          x();
        }
      }
    
  return (
    <>
    <section>
     <div className="register">
         <div className="col-1">
             <h2>Business Details</h2>
             <span>Write your Business details to continue</span>

             <form id='form' className='flex flex-col' onSubmit={changeSubmit}>
                 <input type="text" placeholder='Business name' name='business_name' value={inputs.business_name} onChange={changeHandler}/>
                 <input type="text"  placeholder='GST' name='gst' value={inputs.gst} onChange={changeHandler}/>
                 <input type="text"  placeholder='Address' name='address' value={inputs.address} onChange={changeHandler}/>
                                 
                 <button className='btn'>Submit</button>
             </form>

         </div>
        
     </div>
 </section>
 </>
);
  
}

export default Business