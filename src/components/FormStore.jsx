import React from "react";
import { useDispatch } from "react-redux";
import { addData } from "../reducers/formReducer";

function FormStore(props) {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: e.target["firstName"].value,
      lastName: e.target["lastName"].value,
    };
    console.log(formData, "formData");
    dispatch(addData(formData));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">First Name</label>
          <input type="text" name="firstName" id="" />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input type="text" name="lastName" id="" />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default FormStore;
