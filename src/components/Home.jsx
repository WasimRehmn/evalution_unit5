import React from "react";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

export const Home = () => {
    const data = useSelector((state) => state.loginData);
    // const [status, setStatus] = React.useState(false);
    // const navigate = useNavigate();

    // if (data.name === undefined) {
    //     setStatus(true);
    // }
    // console.log(data);

    // const toLogin = () => {
    //     navigate("/login");
    // };

    return (
        <>
            <h1>Home</h1>

            <div>
                <div>Name : {data.name}</div>
                <div>Email : {data.email}</div>
                <div>Mobile No.: {data.mobile}</div>
                <div>Description : {data.description}</div>
            </div>
        </>
    );
};
