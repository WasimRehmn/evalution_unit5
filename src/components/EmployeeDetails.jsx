import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
    disply: grid;
    grid-template-columns: repeat(4, 1fr);
`;

export const EmployeeDetails = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3001/EmpData")
            .then((res) => setAllData(res.data));
    }, []);

    console.log(allData);
    return (
        <Div>
            <h1>Employee Details</h1>

            <div>
                {allData.map((ele) => (
                    <div key={ele.id}>
                        <img src={ele.image} alt="" />
                        <h3>Name : {ele.name}</h3>
                        <p>
                            {ele.age}, {ele.gender}
                        </p>
                        <p>Mobile : {ele.gender}</p>
                        <p>Contact : {ele.contact}</p>
                        <p>Salary : ₹{ele.salary}</p>
                        <p>Description : {ele.description}</p>
                    </div>
                ))}
            </div>
        </Div>
    );
};
