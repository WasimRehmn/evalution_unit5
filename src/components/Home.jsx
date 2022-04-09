import React from "react";
import { useSelector } from "react-redux";

export const Home = () => {
    const data = useSelector((state) => state.loginData);
    console.log(data);

    return (
        <div>
            <h1>Home</h1>
            <div>Name : {data.name}</div>
            <div>Email : {data.email}</div>
            <div>Mobile No.: {data.mobile}</div>
            <div>Description : {data.description}</div>
        </div>
    );
};
