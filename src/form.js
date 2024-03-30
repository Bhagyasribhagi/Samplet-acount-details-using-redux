import { useDispatch } from "react-redux";
import { useState } from "react";
import './form.css'
function Form() {
  let dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [fullName,setFullname]=useState("");
  const [mobile,setMobile]=useState("");

  return (
    <>
      <div className="form-container">
        <h2 className="head">User Acount Details</h2>
        <div className="row details">
          <div className="col-4">
            <input
              type="number"
              value={amount}
              placeholder="Enter amount"
              className="form-control"
              onChange={(e) => {
                let data = e.target.value;
                setAmount(data);
              }}
            />
          </div>
          <button
            className="btn btn-primary col-2 m-1"
            onClick={() => {
              dispatch({ type: "deposit", payload: amount });
              setAmount("");
            }}
          >
            Deposite
          </button>

          <button
            className="btn btn-warning col-2 m-1"
            onClick={() => {
              dispatch({ type: "withdraw", payload: amount });
              setAmount("");
            }}
          >
            Withdrow
          </button>
        </div>

        {/* //name */}
        <div className="row details">
          <div className="col-4">
            <input
              type="text"
              value={fullName}
              placeholder="Enter full name"
              className="form-control"
              onChange={(e) => {
                let data = e.target.value;
                setFullname(data);
              }}
            />
          </div>
          <button
            className="btn btn-primary col-2 m-1"
            onClick={() => {
              dispatch({ type: "nameUpdate", payload: fullName });
              setFullname("");
            }}
          >
            Update
          </button>

          
        </div>

        {/* //mobile */}

        <div className="row details">
          <div className="col-4">
            <input
              type="number"
              value={mobile}
              placeholder="Enter mobile number"
              className="form-control"
              onChange={(e) => {
                let data = e.target.value;
                setMobile(data);
              }}
            />
          </div>
          <button
            className="btn btn-primary col-2"
            onClick={() => {
              dispatch({ type: "mobileUpdate", payload: mobile });
              setMobile("");
            }}
          >
            Update
          </button>
          

         

          
        </div>
        <button
            className="btn btn-danger col-2 mt-5"
            onClick={() => {
              dispatch({ type: "reset" });
             
            }}
          >
            Reset
          </button>
      </div>
    </>
  );
}
export default Form;
