import { useSelector } from "react-redux"
import './acount.css'
function Acount(){
   let data= useSelector(
        (state)=>{
            return state
        });

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
                    <td>{data.balance}</td>
                    <td>{data.fullName}</td>
                    <td>{data.mobile}</td>
                </tr>
            </tbody>
        </table>
    </div></>
    )
}
export default Acount
