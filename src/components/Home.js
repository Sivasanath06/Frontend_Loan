import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { signupPerson } from '../api-helper';
import '../App.css';


function Home() {
  const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        first_name: '',
        last_name: '',
        email:'',
        age:'',
        mobile_number:''
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
          signupPerson(inputs);
          navigate('/b');

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
             <h1>Personal Details</h1>  
             <span>Write your personal details to continue</span>

             <form id='form' className='flex flex-col' onSubmit={changeSubmit}>
                 <input type="text" placeholder='first_name' name='first_name'  value={inputs.first_name}  onChange={changeHandler} />
                 <input type="text"  placeholder='last_name' name='last_name' value={inputs.last_name}  onChange={changeHandler}/>
                 <input type="email"  placeholder='email'  name='email' value={inputs.email} onChange={changeHandler}/>
                 <input type="number"  placeholder='age' name='age' value={inputs.age}  onChange={changeHandler}/>
                 <input type="text"  placeholder='mobile_number'  name='mobile_number' value={inputs.mobile_number} onChange={changeHandler}/>
                 
                 <button className='btn'>Submit</button>
             </form>

         </div>
        
     </div>
 </section>
 </>
);
  
}

export default Home