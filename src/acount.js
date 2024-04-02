import { useSelector } from "react-redux"
import './acount.css'
function Acount(){
   let data= useSelector(
        (state)=>{
            return state
        });

        console.log(data)
    return( 
    <>
     <div className="acount-container">
        <h1 className="heading pt-5 pb-3" >User Updated Data</h1>
        <table className="table table-bordered w-50">
            <thead>
                <tr>
                    <th>Balence</th>
                    <th>User Name</th>
                    <th>Mobile</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.acount.balance}</td>
                    <td>{data.acount.fullName}</td>
                    <td>{data.acount.mobile}</td>
                </tr>
            </tbody>
        </table>
        {/* //transaction details */}
        <h2 className="heading pt-5 pb-3">Transaction Details</h2>

        <table className="table table-bordered w-50">
          <thead>
            <tr>
              <th>Id</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {data.transaction.map((tr, index) => (
              <tr key={tr.id}>
                <td>{tr.id+1}</td>
                <td>{tr.amount}</td>
                <td>{tr.type}</td>
                <td>{tr.date.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

    </div></>
    )
}
export default Acount
