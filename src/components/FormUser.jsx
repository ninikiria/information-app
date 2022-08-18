import React, { useState } from "react";
import { useForm } from "react-hook-form";


const FormUser = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <>
    <div className="form_group">
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <input {...register("FirstName")} placeholder="First name"  maxlength="17"/>
      <select {...register("Category")}>
        <option value="">Select...</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <textarea rows="4" maxlength="30" {...register("AboutYou")} placeholder="Sent Enter Your About" /> 
      <input type="submit" />
    </form>
    </div>   
     <div className='result_form'>
      {data}
    </div>
    </>
  );
};

export default FormUser;

