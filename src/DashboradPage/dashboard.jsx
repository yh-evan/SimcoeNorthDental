import { useParams, Link } from "react-router-dom";
//import { useEffect, useState } from "react";
import useSWR from "swr";

import { Container } from "react-bootstrap";

import './dashboard.css';

import NavigationComponent from "../NavigationComponent/NavigationComponent";
import UserInfoComponent from "./UserInfoComponent/UserInfoComponent";
import UserAppointmentListComponent from "./UserAppointmentListComponent/UserAppointmentListComponent";

export default function Dashboard() {
    const { id } = useParams();
    console.log(`user-${id}`);
    const { data: user, error } = useSWR(`https://db-customer-snd.herokuapp.com/api/customers/${id}`);
    //console.log(user);
    if(error)
        return <h1>Error...</h1>;
/* Hard Coding
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`/api/customers/${id}`)
        .then(res => {
            if(!res.ok)
                throw new Error('unable to get user info from Github');

            return res.json();
        })
        .then(result => setUser(result.customers))
        .catch(err => console.error(err))
        .finally(() => setLoading(false));
    }, [id]);
    console.log(user);
*/

    if(!user){
        return <h1>LOADING...</h1>
    }

    const { first_name, last_name, email_address, address, cell_phone, customer_id, doctor_id, auth_type } = user.customers;
    const data = {
        first_name: first_name,
        last_name: last_name,
        email_address: email_address,
        cell_phone: cell_phone,
        address: address || null,
        customer_id: customer_id || null,
        doctor_id: doctor_id || null,
        auth_type: auth_type || null
    };
    //console.log(data);

    return (
        <div className="dashboard-container">
            <NavigationComponent />
            <main className="dashboard-main">
                <Container>
                    <div className="dashboard-pic">
                        <img src='./testPage.jpg' alt="cusrtomer's pic"></img>
                        <h2 className="dashboard-pic-word">Hello, {first_name} {last_name}</h2>
                        <h4 className="dashboard-pic-word">{customer_id}</h4>
                    </div>
                    <div className="dashboard-contain">
                        <div className="dashboard-info">
                            <UserInfoComponent data={data} />
                            <Link to={{ pathname: `/dashboard/${id}/update`, state: {user: data} }}>Update Info</Link>
                        </div>
                        <div className="dashboard-appointment">
                        </div>
                    </div>
                </Container>
            </main>
        </div>
    );
}