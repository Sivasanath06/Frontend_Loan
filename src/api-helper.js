import axios from "axios";
export const signupReq = async (data)=>{
    const res=await axios.post("/business/signup",{
        business_name: data.business_name,
        gst:data.gst,
        address:data.address,
    })
    .catch((err) => console.log(err));

  if (res.status !== 200 && res.status !== 201) {
    return console.log("Unable to Authenticate");
  }
  const resData = await res.data;
  return resData;
}
export const signupPerson = async (data)=>{
  const res=await axios.post("/person/signup",{
    first_name: data.first_name,
    last_name:data.last_name,
    email:data.email,
    age:data.age,
    mobile_number:data.mobile_number,
  })
  .catch((err) => console.log(err));

if (res.status !== 200 && res.status !== 201) {
  return console.log("Unable to Authenticate");
}
const resData = await res.data;
return resData;
}
export const signupLoan = async (data)=>{
  const res=await axios.post("/loan/signup",{
    loan_amount:data.loan_amount,
    interest:data.interest,
    tenure:data.tenure,
    type_loan:data.type_loan,
  })
  .catch((err) => console.log(err));

if (res.status !== 200 && res.status !== 201) {
  return console.log("Unable to Authenticate");
}
const resData = await res.data;
return resData;
}
export const getAllPerson = async () => {
  const res = await axios.get("/person");
  if (res.status !== 200) {
    return console.log("Some Error Occurred");
  }

  const data = res.data;
  return data;
};
export const getAllBusiness = async () => {
  const res = await axios.get("/business");
  if (res.status !== 200) {
    return console.log("Some Error Occurred");
  }

  const data = res.data;
  return data;
};
export const getAllLoan = async () => {
  const res = await axios.get("/loan");
  if (res.status !== 200) {
    return console.log("Some Error Occurred");
  }

  const data = res.data;
  return data;
};