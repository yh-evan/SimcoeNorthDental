import './UserInfoComponent.css'

export default function UserInfoComponent({ data }) {
    console.log(data);
    const { first_name, last_name, email_address, address, cell_phone, customer_id, doctor_id, auth_type } = data;
    return (
        <div>
            <div>
                <h3>Basic Information</h3>
                <ul className="user-info-li">
                    <li>
                        <div>Full Name</div>
                        <div>{first_name} {last_name}</div>
                    </li>
                    <li>
                        <div>Email Address</div>
                        <div>{email_address}</div>
                    </li>
                    <li>
                        <div>ID</div>
                        <div>
                            {auth_type === "customer"? (
                                <p>{customer_id}</p>
                            ) : (
                                <p>{doctor_id}</p>
                            )}
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                {doctor_id === null || customer_id === null? (
                    <p></p>
                ) : (
                    <p>Doctor Information</p>
                )}
            </div>
            <div>
                <h3>Contact Information</h3>
                <ul className="user-info-li">
                    <li>
                        <div>Phone Number</div>
                        <div>{cell_phone}</div>
                    </li>
                    <li>
                        <div>Address</div>
                        <div>{address}</div>
                    </li>
                </ul>
            </div>
        </div>
        
    );
}