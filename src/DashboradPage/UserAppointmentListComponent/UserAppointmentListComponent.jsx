
import { Table } from "react-bootstrap";
import useSWR from "swr";

export default function UserAppointmentListComponent({ customer_id }) {
    console.log(customer_id);

    const { data: customerList, error } = useSWR(`/api/customers/${customer_id}`);
    console.log(customerList);

    if(error)
        return <h1>Loading...</h1>;

    return(
       <div>
           <Table striped bordered>
               <thead>
                   <th>Doctor Name</th>
                   <th>Date</th>
                   <th>Appointment type</th>
                   <th>Description</th>
               </thead>
               <tbody>
                   {
                        customerList.map(item =>
                            <tr key={item.id}>
                                <td>{item.emp_name}</td>
                                <td>{item.date}</td>
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