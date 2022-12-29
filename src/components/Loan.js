import React, { useState } from 'react'
import { signupLoan } from '../api-helper';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Loan() {
  const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        loan_amount:'',
        interest:'',
        tenure:'',
        type_loan:''
      });
    
      const changeHandler = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
      const changeSubmit=e=>{
        e.preventDefault();
        console.log(inputs); 
        signupLoan(inputs)
            .catch((err) => console.log(err));
            
            navigate('/d');

      }
  return (
    <>
    <section>
     <div className="register">
         <div className="col-1">
             <h2>Loan details</h2>
             <span>Write your loan details to submit</span>

             <form id='form' className='flex flex-col' onSubmit={changeSubmit}>
                 <input type="number" placeholder='loan amount' name='loan_amount' value={inputs.loan_amount} onChange={changeHandler} />
                 <input type="text"  placeholder='interest' name='interest' value={inputs.interest} onChange={changeHandler}/>
                 <input type="text"  placeholder='tenure' name='tenure' value={inputs.tenure} onChange={changeHandler}/>
                 <input type="text"  placeholder='type_loan' name='type_loan' value={inputs.type_loan} onChange={changeHandler}/>
                 
                 <button className='btn'>Submit</button>
             </form>

         </div>
        
     </div>
 </section>
 </>
);
  
}

export default Loan