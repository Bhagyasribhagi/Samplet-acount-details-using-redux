import { useDispatch } from "react-redux";
import { useState } from "react";
import './form.css'
import {deposit, mobileUpdate,nameUpdate,withdraw,reset} from './action.js'
function Form() {
  let dispatch = useDispatch(); //using useDispatch hook we can control the state
  const [amount, setAmount] = useState("");
  const [fullName,setFullname]=useState("");
  const [mobile,setMobile]=useState("");
  const [transactionId,updatetransactionId]=useState(0);
 
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
              dispatch(deposit(amount));//here we are calling dispatch in static way
              updatetransactionId(transactionId+1)
              dispatch({type:"ADD_TRANSACTION",payload:{
                id:transactionId,
                amount:amount,date:new Date(),type:"credit"
              }})
              setAmount("");
            }}
          >
            Deposit
          </button>

          <button
            className="btn btn-warning col-2 m-1"
            onClick={() => {
              dispatch(withdraw(amount));
              updatetransactionId(transactionId+1)
              dispatch({type:"ADD_TRANSACTION",payload:{
                id:transactionId,amount:amount,date:new Date(),type:"debit"
              }})
              setAmount("");
            }}
          >
            Withdraw
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
              dispatch(nameUpdate(fullName));
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
              dispatch(mobileUpdate(mobile));
              setMobile("");
            }}
          >
            Update
          </button>
        </div>
        <button
            className="btn btn-danger col-2 mt-5"
            onClick={() => {
              dispatch(reset());
             
            }}
          >
            Reset
          </button>
      </div>
    </>
  );
}
export default Form;
