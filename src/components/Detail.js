import React, { useEffect, useState } from "react";
import { getAllBusiness, getAllLoan, getAllPerson } from "../api-helper";

function Detail() {
  const [posts, setPosts] = useState([]);
  const [inputs, setInputs] = useState([]);
  const [loans, setLoan] = useState([]);

  useEffect(() => {
    getAllPerson()
      .then((data) => setPosts(...data.person))
      .catch((err) => console.log(err));
    getAllBusiness()
      .then((data) => setInputs(...data.business))
      .catch((err) => console.log(err));
    getAllLoan()
      .then((data) => setLoan(...data.loan))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
    <h1>Personal Details</h1>
      {posts.first_name} <br />
      {posts.last_name} <br />
      {posts.email} <br />
    <h1>Business Details</h1>

      {inputs.business_name} <br />
      {inputs.gst} <br />
      {inputs.address}<br />
      <h1>Loan Details</h1>

      {loans.loan_amount} <br />
      {loans.tenure} <br />
      {loans.interest} <br />
      {loans.type_loan} <br /> 

    </>
  );
}

export default Detail;
