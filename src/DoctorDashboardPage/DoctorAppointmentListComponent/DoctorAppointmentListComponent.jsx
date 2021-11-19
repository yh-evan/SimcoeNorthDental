
import { Table } from "react-bootstrap";
import useSWR from "swr";

export default function DoctorAppointmentListComponent({ emp_id }) {
    console.log(emp_id);

    const { data: customerList, error } = useSWR(`https://db-customer-appointment-snd.herokuapp.com/api/customerData/employee/${emp_id}`);
    //customerList = customerList.values;
    //console.log(customerList.data);
    // customerList.array.forEach(element => {
    //     console.log(1);
    // });

    if(error)
        return <h1>Error</h1>;
    if(!customerList){
        return <h1>Loading...</h1>;
    }else{
    return(
       <div>
           <Table striped>
               <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
               </thead>
               <tbody>
                   {
                        customerList.data.map(item =>
                            <tr key={item._id}>
                                <td>{item.customer_name}</td>
                                <td>{item.date.slice(0, 10)} / {item.date.slice(12,16)}</td>
                                <td>{item.type}</td>
                                <td>{item.description}</td>
                            </tr> 
                        )
                   }
               </tbody>
           </Table>
       </div> 
    );
    }
}