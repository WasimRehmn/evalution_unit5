import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 1rem;
margin: auto;

        & > div {
            border: 1px solid black;
            text-align: left;
            padding: 10px;
            
            & > img {
                width: 100%;
                height: 200px;
            }
            
            & > h3 {
                margin-bottom: -10px;
            }
            & > p:nth-child(3){
                margin-left: 60%;
            }
            & > div{
                display: flex;
                justify-content: space-between;
            }
        }
    }
`;

export const EmployeeDetails = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios
            .get("http://localhost:3001/EmpData")
            .then((res) => setAllData(res.data));
    };

    const deleteDetail = (id) => {
        axios.delete(`http://localhost:3001/EmpData/${id}`);

        getData();
    };

    console.log(allData);
    return (
        <div style={{ margin: "1rem 2rem" }}>
            <h1>Employee Details</h1>

            <Div>
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
                        <div>
                            <button>Edit</button>
                            <button onClick={() => deleteDetail(ele.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </Div>
        </div>
    );
};
